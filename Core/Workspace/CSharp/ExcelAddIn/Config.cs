﻿// ------------------------------------------------------------------------------------------------
// <copyright file="Config.cs" company="Allors bvba">
// Copyright (c) Allors bvba. All rights reserved.
// Licensed under the LGPL license. See LICENSE file in the project root for full license information.
// </copyright>
// -----------------------------------------------------------------------------------------------

namespace Allors.Workspace
{
    using Allors.Workspace.Domain;
    using Allors.Workspace.Meta;

    public static partial class Config
    {
        public static readonly ObjectFactory ObjectFactory;

        static Config() => ObjectFactory = new ObjectFactory(MetaPopulation.Instance, typeof(User));
    }
}