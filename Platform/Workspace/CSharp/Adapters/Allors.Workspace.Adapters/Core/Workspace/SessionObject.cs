// <copyright file="SessionObject.cs" company="Allors bvba">
// Copyright (c) Allors bvba. All rights reserved.
// Licensed under the LGPL license. See LICENSE file in the project root for full license information.
// </copyright>

namespace Allors.Workspace
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net.Sockets;
    using Allors.Protocol.Remote.Push;
    using Allors.Workspace.Meta;
    using Domain;
    using Protocol;
    using Protocol.Data;

    public class SessionObject : ISessionObject
    {
        private static readonly ISessionObject[] EmptySessionObjects = new ISessionObject[0];

        private Dictionary<IRoleType, object> changedRoleByRoleType;

        private Dictionary<IRoleType, object> roleByRoleType = new Dictionary<IRoleType, object>();

        protected SessionObject(Session session) => this.Session = session;

        ISession ISessionObject.Session => this.Session;

        public Session Session { get; }

        public IWorkspaceObject WorkspaceObject { get; set; }

        public IClass ObjectType { get; set; }

        public long? NewId { get; set; }

        public long Id => this.WorkspaceObject?.Id ?? this.NewId ?? 0;

        public long? Version => this.WorkspaceObject?.Version;

        public bool HasChanges
        {
            get
            {
                if (this.NewId != null)
                {
                    return true;
                }

                return this.changedRoleByRoleType != null;
            }
        }

        public bool HasChangedRoles(params IRoleType[] roleTypes)
        {
            if (roleTypes.Length == 0)
            {
                return this.HasChanges;
            }

            if (this.NewId != null)
            {
                // I am new in the session, and i have at least one of the requested roleTypes
                if (roleTypes.Any(v => this.roleByRoleType.ContainsKey(v)))
                {
                    return true;
                }

                return false;
            }

            if (this.changedRoleByRoleType != null)
            {
                if (roleTypes.Any(v => this.changedRoleByRoleType.ContainsKey(v)))
                {
                    return true;
                }
            }

            return false;
        }

        public bool CanRead(IRoleType roleType)
        {
            if (this.NewId != null)
            {
                return true;
            }

            var permission = this.Session.Workspace.GetPermission(this.ObjectType, roleType, Operations.Read);
            return this.WorkspaceObject.IsPermitted(permission);
        }

        public bool CanWrite(IRoleType roleType)
        {
            if (this.NewId != null)
            {
                return true;
            }

            var permission = this.Session.Workspace.GetPermission(this.ObjectType, roleType, Operations.Write);
            return this.WorkspaceObject.IsPermitted(permission);
        }

        public bool CanExecute(IMethodType methodType)
        {
            if (this.NewId != null)
            {
                return true;
            }

            var permission = this.Session.Workspace.GetPermission(this.ObjectType, methodType, Operations.Execute);
            return this.WorkspaceObject.IsPermitted(permission);
        }

        public bool Exist(IRoleType roleType)
        {
            var value = this.Get(roleType);
            if (roleType.ObjectType.IsComposite && roleType.IsMany)
            {
                return ((IEnumerable<SessionObject>)value).Any();
            }

            return value != null;
        }

        public object Get(IRoleType roleType)
        {
            if (!this.roleByRoleType.TryGetValue(roleType, out var value))
            {
                if (this.NewId == null)
                {
                    var workspaceRole = this.WorkspaceObject.Roles?.FirstOrDefault(v => v.RoleType == roleType);
                    if (workspaceRole?.Value != null)
                    {
                        if (roleType.ObjectType.IsUnit)
                        {
                            value = workspaceRole.Value;
                        }
                        else
                        {
                            if (roleType.IsOne)
                            {
                                value = this.Session.Get((long)workspaceRole.Value);
                            }
                            else
                            {
                                var ids = (long[])workspaceRole.Value;
                                var array = Array.CreateInstance(roleType.ObjectType.ClrType, ids.Length);
                                for (var i = 0; i < ids.Length; i++)
                                {
                                    array.SetValue(this.Session.Get(ids[i]), i);
                                }

                                value = array;
                            }
                        }
                    }
                }

                if (value == null && roleType.IsMany)
                {
                    value = this.Session.Workspace.ObjectFactory.EmptyArray(roleType.ObjectType);
                }

                this.roleByRoleType[roleType] = value;
            }

            return value;
        }

        public void Set(IRoleType roleType, object value)
        {
            var current = this.Get(roleType);
            if (roleType.ObjectType.IsUnit || roleType.IsOne)
            {
                if (object.Equals(current, value))
                {
                    return;
                }
            }
            else
            {
                if (value == null)
                {
                    value = EmptySessionObjects;
                }

                var currentCollection = (IList<object>)current;
                var valueCollection = (IList<object>)value;
                if (currentCollection.Count == valueCollection.Count && !currentCollection.Except(valueCollection).Any())
                {
                    return;
                }
            }

            if (this.changedRoleByRoleType == null)
            {
                this.changedRoleByRoleType = new Dictionary<IRoleType, object>();
            }

            if (roleType.ObjectType.IsComposite && roleType.IsMany)
            {
                // TODO: Optimize
                value = new ArrayList((Array)value).ToArray(roleType.ObjectType.ClrType);
            }

            this.roleByRoleType[roleType] = value;
            this.changedRoleByRoleType[roleType] = value;
        }

        public void Add(IRoleType roleType, ISessionObject value)
        {
            var roles = (ISessionObject[])this.Get(roleType);
            if (!roles.Contains(value))
            {
                roles = new List<ISessionObject>(roles) { value }.ToArray();
            }

            this.Set(roleType, roles);
        }

        public void Remove(IRoleType roleType, ISessionObject value)
        {
            var roles = (ISessionObject[])this.Get(roleType);
            if (roles.Contains(value))
            {
                var newRoles = new List<ISessionObject>(roles);
                newRoles.Remove(value);
                roles = newRoles.ToArray();
            }

            this.Set(roleType, roles);
        }

        public T GetAssociation<T>(IAssociationType associationType) => this.Session.GetAssociation(this, associationType).Cast<T>().FirstOrDefault();

        public T[] GetAssociations<T>(IAssociationType associationType) => this.Session.GetAssociation(this, associationType).Cast<T>().ToArray();

        public PushRequestObject Save(MetaObjectCompressor compressor)
        {
            if (this.changedRoleByRoleType != null)
            {
                var data = new PushRequestObject
                {
                    I = this.Id.ToString(),
                    V = this.Version.ToString(),
                    Roles = this.SaveRoles(compressor),
                };

                return data;
            }

            return null;
        }

        public PushRequestNewObject SaveNew(MetaObjectCompressor compressor)
        {
            var data = new PushRequestNewObject
            {
                NI = this.NewId.ToString(),
                T = compressor.Write(this.ObjectType),
            };

            if (this.changedRoleByRoleType != null)
            {
                data.Roles = this.SaveRoles(compressor);
            }

            return data;
        }

        public void Reset()
        {
            if (this.WorkspaceObject != null)
            {
                this.WorkspaceObject = this.WorkspaceObject.Workspace.Get(this.Id);
            }

            this.changedRoleByRoleType = null;

            this.roleByRoleType = new Dictionary<IRoleType, object>();
        }

        internal object GetForAssociation(IRoleType roleType)
        {
            if (!this.roleByRoleType.TryGetValue(roleType, out var value))
            {
                if (this.NewId == null)
                {
                    var workspaceRole = this.WorkspaceObject.Roles?.FirstOrDefault(v => v.RoleType == roleType);
                    if (workspaceRole?.Value != null)
                    {
                        if (roleType.ObjectType.IsUnit)
                        {
                            value = workspaceRole.Value;
                        }
                        else
                        {
                            if (roleType.IsOne)
                            {
                                value = this.Session.GetForAssociation((long)workspaceRole.Value);
                            }
                            else
                            {
                                var ids = (long[])workspaceRole.Value;
                                var array = ids.Select(v => this.Session.GetForAssociation(v))
                                    .Where(v => v != null)
                                    .ToArray();
                                value = array;
                            }
                        }
                    }
                }

                if (value == null && roleType.IsMany)
                {
                    value = this.Session.Workspace.ObjectFactory.EmptyArray(roleType.ObjectType);
                }
            }

            return value;
        }

        private PushRequestRole[] SaveRoles(MetaObjectCompressor compressor)
        {
            var saveRoles = new List<PushRequestRole>();

            foreach (var keyValuePair in this.changedRoleByRoleType)
            {
                var roleType = keyValuePair.Key;
                var roleValue = keyValuePair.Value;

                var pushRequestRole = new PushRequestRole { T = compressor.Write(roleType) };

                if (roleType.ObjectType.IsUnit)
                {
                    pushRequestRole.S = UnitConvert.ToString(roleValue);
                }
                else
                {
                    if (roleType.IsOne)
                    {
                        var sessionRole = (SessionObject)roleValue;
                        pushRequestRole.S = sessionRole?.Id.ToString();
                    }
                    else
                    {
                        var sessionRoles = (SessionObject[])roleValue;
                        var roleIds = sessionRoles.Select(item => item.Id.ToString()).ToArray();
                        if (this.NewId != null)
                        {
                            pushRequestRole.A = roleIds;
                        }
                        else
                        {
                            var workspaceRole = this.WorkspaceObject.Roles.FirstOrDefault(v => v.RoleType == roleType);
                            if (workspaceRole?.Value == null)
                            {
                                pushRequestRole.A = roleIds;
                            }
                            else
                            {
                                if (workspaceRole.Value != null)
                                {
                                    var originalRoleIds = ((IEnumerable<long>)workspaceRole.Value)
                                        .Select(v => v.ToString())
                                        .ToArray();
                                    pushRequestRole.A = roleIds.Except(originalRoleIds).ToArray();
                                    pushRequestRole.R = originalRoleIds.Except(roleIds).ToArray();
                                }
                                else
                                {
                                    pushRequestRole.A = roleIds.ToArray();
                                }
                            }
                        }
                    }
                }

                saveRoles.Add(pushRequestRole);
            }

            return saveRoles.ToArray();
        }
    }
}
