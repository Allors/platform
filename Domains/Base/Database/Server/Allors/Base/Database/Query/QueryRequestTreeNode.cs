﻿namespace Allors.Server
{
    using System;

    using Allors.Meta;

    public class QueryRequestTreeNode
    {
        /// <summary>
        /// The RoleType.
        /// </summary>
        public string RT { get; set; }

        /// <summary>
        /// The TreeNodes
        /// </summary>
        public QueryRequestTreeNode N { get; set; }

        public void Parse(Tree tree)
        {
            var metaPopulation = tree.Composite.MetaPopulation;
            var roleType = (RoleType)metaPopulation.Find(new Guid(this.RT));

            tree.Add(roleType);
        }
    }
}