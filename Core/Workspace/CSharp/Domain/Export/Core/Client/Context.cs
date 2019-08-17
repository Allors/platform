﻿// <copyright file="Context.cs" company="Allors bvba">
// Copyright (c) Allors bvba. All rights reserved.
// Licensed under the LGPL license. See LICENSE file in the project root for full license information.
// </copyright>

namespace Allors.Workspace.Client
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Allors.Protocol.Remote.Invoke;
    using Allors.Protocol.Remote.Pull;
    using Allors.Protocol.Remote.Push;
    using Allors.Protocol.Remote.Sync;
    using Allors.Workspace.Data;

    public class Context
    {
        private const string DefaultPullService = "Pull";

        private readonly Database database;
        private readonly Workspace workspace;

        public Context(Database database, Workspace workspace)
        {
            this.database = database;
            this.workspace = workspace;

            this.Session = new Session(this.workspace);
        }

        public Session Session { get; }

        public async Task<Result> Load(object args, string pullService = DefaultPullService)
        {
            if (args is Pull pull)
            {
                args = new PullRequest { P = new[] { pull.ToJson() } };
            }

            if (args is IEnumerable<Pull> pulls)
            {
                args = new PullRequest { P = pulls.Select(v => v.ToJson()).ToArray() };
            }

            var pullResponse = await this.database.Pull(pullService, args);
            var requireLoadIds = this.workspace.Diff(pullResponse);
            if (requireLoadIds.Objects.Length > 0)
            {
                var loadResponse = await this.database.Sync(requireLoadIds);
                this.workspace.Sync(loadResponse);
            }

            var result = new Result(this.Session, pullResponse);
            return result;
        }

        public async Task<Result> Load(params Pull[] pulls) => await this.Load((IEnumerable<Pull>)pulls);

        public async Task<PushResponse> Save()
        {
            var saveRequest = this.Session.PushRequest();
            var pushResponse = await this.database.Push(saveRequest);
            if (!pushResponse.HasErrors)
            {
                this.Session.PushResponse(pushResponse);

                var objects = saveRequest.Objects.Select(v => v.I).ToArray();
                if (pushResponse.NewObjects != null)
                {
                    objects = objects.Union(pushResponse.NewObjects.Select(v => v.I)).ToArray();
                }

                var requireLoadIds = new SyncRequest
                {
                    Objects = objects,
                };

                var loadResponse = await this.database.Sync(requireLoadIds);
                this.workspace.Sync(loadResponse);
                this.Session.Reset();
            }

            return pushResponse;
        }

        public Task<InvokeResponse> Invoke(Method method) => this.database.Invoke(method);

        public Task<InvokeResponse> Invoke(string service, object args) => this.database.Invoke(service, args);
    }
}
