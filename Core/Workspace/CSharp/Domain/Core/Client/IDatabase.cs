// <copyright file="IDatabase.cs" company="Allors bvba">
// Copyright (c) Allors bvba. All rights reserved.
// Licensed under the LGPL license. See LICENSE file in the project root for full license information.
// </copyright>

namespace Allors.Workspace.Client
{
    using System.Threading.Tasks;
    using Allors.Protocol.Remote.Invoke;
    using Allors.Protocol.Remote.Pull;
    using Allors.Protocol.Remote.Push;
    using Allors.Protocol.Remote.Sync;

    public interface IDatabase
    {
        Task<PullResponse> Pull(string name, PullRequest pullRequest);

        Task<PullResponse> Pull(string name, object pullRequest);

        Task<SyncResponse> Sync(SyncRequest syncRequest);

        Task<PushResponse> Push(PushRequest pushRequest);

        Task<InvokeResponse> Invoke(Method method);

        Task<InvokeResponse> Invoke(Method[] methods, InvokeOptions options = null);

        Task<InvokeResponse> Invoke(string service, object args);
    }
}
