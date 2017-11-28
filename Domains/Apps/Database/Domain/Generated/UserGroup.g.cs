// Allors generated file. 
// Do not edit this file, changes will be overwritten.
namespace Allors.Domain
{
	public partial class UserGroup : Allors.IObject , UniquelyIdentifiable, AccessControlledObject
	{
		private readonly IStrategy strategy;

		public UserGroup(Allors.IStrategy strategy) 
		{
			this.strategy = strategy;
		}

		public Allors.Meta.MetaUserGroup Meta
		{
			get
			{
				return Allors.Meta.MetaUserGroup.Instance;
			}
		}

		public long Id
		{
			get { return this.strategy.ObjectId; }
		}

		public IStrategy Strategy
        {
            [System.Diagnostics.DebuggerStepThrough]
            get { return this.strategy; }
        }

		public static UserGroup Instantiate (Allors.ISession allorsSession, string allorsObjectId)
		{
			return (UserGroup) allorsSession.Instantiate(allorsObjectId);		
		}

		public override bool Equals(object obj)
        {
            var typedObj = obj as IObject;
            return typedObj != null &&
                   typedObj.Strategy.ObjectId.Equals(this.Strategy.ObjectId) &&
                   typedObj.Strategy.Session.Database.Id.Equals(this.Strategy.Session.Database.Id);
        }

		public override int GetHashCode()
        {
            return this.Strategy.ObjectId.GetHashCode();
        }



		virtual public global::Allors.Extent<User> Members
		{ 
			get
			{
				return Strategy.GetCompositeRoles(Meta.Members.RelationType);
			}
			set
			{
				Strategy.SetCompositeRoles(Meta.Members.RelationType, value);
			}
		}

		virtual public void AddMember (User value)
		{
			Strategy.AddCompositeRole(Meta.Members.RelationType, value);
		}

		virtual public void RemoveMember (User value)
		{
			Strategy.RemoveCompositeRole(Meta.Members.RelationType, value);
		}

		virtual public bool ExistMembers
		{
			get
			{
				return Strategy.ExistCompositeRoles(Meta.Members.RelationType);
			}
		}

		virtual public void RemoveMembers()
		{
			Strategy.RemoveCompositeRoles(Meta.Members.RelationType);
		}


		virtual public global::System.String Name 
		{
			get
			{
				return (global::System.String) Strategy.GetUnitRole(Meta.Name.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.Name.RelationType, value);
			}
		}

		virtual public bool ExistName{
			get
			{
				return Strategy.ExistUnitRole(Meta.Name.RelationType);
			}
		}

		virtual public void RemoveName()
		{
			Strategy.RemoveUnitRole(Meta.Name.RelationType);
		}


		virtual public global::System.Guid UniqueId 
		{
			get
			{
				return (global::System.Guid) Strategy.GetUnitRole(Meta.UniqueId.RelationType);
			}
			set
			{
				Strategy.SetUnitRole(Meta.UniqueId.RelationType, value);
			}
		}

		virtual public bool ExistUniqueId{
			get
			{
				return Strategy.ExistUnitRole(Meta.UniqueId.RelationType);
			}
		}

		virtual public void RemoveUniqueId()
		{
			Strategy.RemoveUnitRole(Meta.UniqueId.RelationType);
		}


		virtual public global::Allors.Extent<Permission> DeniedPermissions
		{ 
			get
			{
				return Strategy.GetCompositeRoles(Meta.DeniedPermissions.RelationType);
			}
			set
			{
				Strategy.SetCompositeRoles(Meta.DeniedPermissions.RelationType, value);
			}
		}

		virtual public void AddDeniedPermission (Permission value)
		{
			Strategy.AddCompositeRole(Meta.DeniedPermissions.RelationType, value);
		}

		virtual public void RemoveDeniedPermission (Permission value)
		{
			Strategy.RemoveCompositeRole(Meta.DeniedPermissions.RelationType, value);
		}

		virtual public bool ExistDeniedPermissions
		{
			get
			{
				return Strategy.ExistCompositeRoles(Meta.DeniedPermissions.RelationType);
			}
		}

		virtual public void RemoveDeniedPermissions()
		{
			Strategy.RemoveCompositeRoles(Meta.DeniedPermissions.RelationType);
		}


		virtual public global::Allors.Extent<SecurityToken> SecurityTokens
		{ 
			get
			{
				return Strategy.GetCompositeRoles(Meta.SecurityTokens.RelationType);
			}
			set
			{
				Strategy.SetCompositeRoles(Meta.SecurityTokens.RelationType, value);
			}
		}

		virtual public void AddSecurityToken (SecurityToken value)
		{
			Strategy.AddCompositeRole(Meta.SecurityTokens.RelationType, value);
		}

		virtual public void RemoveSecurityToken (SecurityToken value)
		{
			Strategy.RemoveCompositeRole(Meta.SecurityTokens.RelationType, value);
		}

		virtual public bool ExistSecurityTokens
		{
			get
			{
				return Strategy.ExistCompositeRoles(Meta.SecurityTokens.RelationType);
			}
		}

		virtual public void RemoveSecurityTokens()
		{
			Strategy.RemoveCompositeRoles(Meta.SecurityTokens.RelationType);
		}



		virtual public global::Allors.Extent<AccessControl> AccessControlsWhereSubjectGroup
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.AccessControlsWhereSubjectGroup.RelationType);
			}
		}

		virtual public bool ExistAccessControlsWhereSubjectGroup
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.AccessControlsWhereSubjectGroup.RelationType);
			}
		}


		virtual public OrganisationVersion OrganisationVersionWhereOwnerUserGroup
		{ 
			get
			{
				return (OrganisationVersion) Strategy.GetCompositeAssociation(Meta.OrganisationVersionWhereOwnerUserGroup.RelationType);
			}
		} 

		virtual public bool ExistOrganisationVersionWhereOwnerUserGroup
		{
			get
			{
				return Strategy.ExistCompositeAssociation(Meta.OrganisationVersionWhereOwnerUserGroup.RelationType);
			}
		}


		virtual public OrganisationVersion OrganisationVersionWhereContactsUserGroup
		{ 
			get
			{
				return (OrganisationVersion) Strategy.GetCompositeAssociation(Meta.OrganisationVersionWhereContactsUserGroup.RelationType);
			}
		} 

		virtual public bool ExistOrganisationVersionWhereContactsUserGroup
		{
			get
			{
				return Strategy.ExistCompositeAssociation(Meta.OrganisationVersionWhereContactsUserGroup.RelationType);
			}
		}


		virtual public Organisation OrganisationWhereOwnerUserGroup
		{ 
			get
			{
				return (Organisation) Strategy.GetCompositeAssociation(Meta.OrganisationWhereOwnerUserGroup.RelationType);
			}
		} 

		virtual public bool ExistOrganisationWhereOwnerUserGroup
		{
			get
			{
				return Strategy.ExistCompositeAssociation(Meta.OrganisationWhereOwnerUserGroup.RelationType);
			}
		}


		virtual public Organisation OrganisationWhereContactsUserGroup
		{ 
			get
			{
				return (Organisation) Strategy.GetCompositeAssociation(Meta.OrganisationWhereContactsUserGroup.RelationType);
			}
		} 

		virtual public bool ExistOrganisationWhereContactsUserGroup
		{
			get
			{
				return Strategy.ExistCompositeAssociation(Meta.OrganisationWhereContactsUserGroup.RelationType);
			}
		}


		virtual public global::Allors.Extent<Notification> NotificationsWhereTarget
		{ 
			get
			{
				return Strategy.GetCompositeAssociations(Meta.NotificationsWhereTarget.RelationType);
			}
		}

		virtual public bool ExistNotificationsWhereTarget
		{
			get
			{
				return Strategy.ExistCompositeAssociations(Meta.NotificationsWhereTarget.RelationType);
			}
		}



		public ObjectOnBuild OnBuild()
		{ 
			var method = new UserGroupOnBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnBuild OnBuild(System.Action<ObjectOnBuild> action)
		{ 
			var method = new UserGroupOnBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild()
		{ 
			var method = new UserGroupOnPostBuild(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostBuild OnPostBuild(System.Action<ObjectOnPostBuild> action)
		{ 
			var method = new UserGroupOnPostBuild(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive()
		{ 
			var method = new UserGroupOnPreDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPreDerive OnPreDerive(System.Action<ObjectOnPreDerive> action)
		{ 
			var method = new UserGroupOnPreDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive()
		{ 
			var method = new UserGroupOnDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnDerive OnDerive(System.Action<ObjectOnDerive> action)
		{ 
			var method = new UserGroupOnDerive(this);
            action(method);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive()
		{ 
			var method = new UserGroupOnPostDerive(this);
            method.Execute();
            return method;
		}

		public ObjectOnPostDerive OnPostDerive(System.Action<ObjectOnPostDerive> action)
		{ 
			var method = new UserGroupOnPostDerive(this);
            action(method);
            method.Execute();
            return method;
		}
	}

	public partial class UserGroupBuilder : Allors.ObjectBuilder<UserGroup> , UniquelyIdentifiableBuilder, AccessControlledObjectBuilder, global::System.IDisposable
	{		
		public UserGroupBuilder(Allors.ISession session) : base(session)
	    {
	    }

		protected override void OnBuild(UserGroup instance)
		{

			instance.Name = this.Name;
		
		
			

			if(this.UniqueId.HasValue)
			{
				instance.UniqueId = this.UniqueId.Value;
			}			
		
		
			if(this.Members!=null)
			{
				instance.Members = this.Members.ToArray();
			}
		
			if(this.DeniedPermissions!=null)
			{
				instance.DeniedPermissions = this.DeniedPermissions.ToArray();
			}
		
			if(this.SecurityTokens!=null)
			{
				instance.SecurityTokens = this.SecurityTokens.ToArray();
			}
		
		}


				public global::System.Collections.Generic.List<User> Members {get; set;}	

				/// <exclude/>
				public UserGroupBuilder WithMember(User value)
		        {
					if(this.Members == null)
					{
						this.Members = new global::System.Collections.Generic.List<User>(); 
					}
		            this.Members.Add(value);
		            return this;
		        }		

				
				public global::System.String Name {get; set;}

				/// <exclude/>
				public UserGroupBuilder WithName(global::System.String value)
		        {
				    if(this.Name!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.Name = value;
		            return this;
		        }	

				public global::System.Guid? UniqueId {get; set;}

				/// <exclude/>
				public UserGroupBuilder WithUniqueId(global::System.Guid? value)
		        {
				    if(this.UniqueId!=null){throw new global::System.ArgumentException("One multicplicity");}
		            this.UniqueId = value;
		            return this;
		        }	

				public global::System.Collections.Generic.List<Permission> DeniedPermissions {get; set;}	

				/// <exclude/>
				public UserGroupBuilder WithDeniedPermission(Permission value)
		        {
					if(this.DeniedPermissions == null)
					{
						this.DeniedPermissions = new global::System.Collections.Generic.List<Permission>(); 
					}
		            this.DeniedPermissions.Add(value);
		            return this;
		        }		

				
				public global::System.Collections.Generic.List<SecurityToken> SecurityTokens {get; set;}	

				/// <exclude/>
				public UserGroupBuilder WithSecurityToken(SecurityToken value)
		        {
					if(this.SecurityTokens == null)
					{
						this.SecurityTokens = new global::System.Collections.Generic.List<SecurityToken>(); 
					}
		            this.SecurityTokens.Add(value);
		            return this;
		        }		

				

	}

	public partial class UserGroups : global::Allors.ObjectsBase<UserGroup>
	{
		public UserGroups(Allors.ISession session) : base(session)
		{
		}

		public Allors.Meta.MetaUserGroup Meta
		{
			get
			{
				return Allors.Meta.MetaUserGroup.Instance;
			}
		}

		public override Allors.Meta.Composite ObjectType
		{
			get
			{
				return Meta.ObjectType;
			}
		}
	}

}