﻿// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Upgrade.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Commands
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Xml;

    using Allors;
    using Allors.Domain;
    using Allors.Services;

    using McMaster.Extensions.CommandLineUtils;

    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.Logging;

    [Command(Description = "Add file contents to the index")]
    public class Upgrade
    {
        private readonly HashSet<Guid> excludedObjectTypes = new HashSet<Guid>
        {
        };

        private readonly HashSet<Guid> excludedRelationTypes = new HashSet<Guid>
        {
        };

        private readonly HashSet<Guid> movedRelationTypes = new HashSet<Guid>
        {
        };

        private readonly IDatabaseService databaseService;

        private readonly ILogger<Upgrade> logger;

        private readonly DirectoryInfo dataPath;

        public Upgrade(IConfiguration configuration, IDatabaseService databaseService, ILogger<Upgrade> logger)
        {
            this.dataPath = new DirectoryInfo(".").GetAncestorSibling(configuration["datapath"]);
            this.databaseService = databaseService;
            this.logger = logger;
        }

        [Option("-f", Description = "File to load")]
        public string FileName { get; set; } = "population.xml";

        public int OnExecute(CommandLineApplication app)
        {
            var fileInfo = new FileInfo(this.FileName);

            this.logger.LogInformation("Begin");

            var notLoadedObjectTypeIds = new HashSet<Guid>();
            var notLoadedRelationTypeIds = new HashSet<Guid>();

            var notLoadedObjects = new HashSet<long>();

            using (var reader = XmlReader.Create(fileInfo.FullName))
            {
                this.databaseService.Database.ObjectNotLoaded += (sender, args) =>
                {
                    if (!this.excludedObjectTypes.Contains(args.ObjectTypeId))
                    {
                        notLoadedObjectTypeIds.Add(args.ObjectTypeId);
                    }
                    else
                    {
                        var id = args.ObjectId;
                        notLoadedObjects.Add(id);
                    }
                };

                this.databaseService.Database.RelationNotLoaded += (sender, args) =>
                {
                    if (!this.excludedRelationTypes.Contains(args.RelationTypeId))
                    {
                        if (!notLoadedObjects.Contains(args.AssociationId))
                        {
                            notLoadedRelationTypeIds.Add(args.RelationTypeId);
                        }
                    }
                };

                this.logger.LogInformation("Loading {file}", fileInfo.FullName);
                this.databaseService.Database.Load(reader);
            }

            if (notLoadedObjectTypeIds.Count > 0)
            {
                var notLoaded = notLoadedObjectTypeIds
                    .Aggregate("Could not load following ObjectTypeIds: ", (current, objectTypeId) => current + "- " + objectTypeId);

                this.logger.LogError(notLoaded);
                return 1;
            }

            if (notLoadedRelationTypeIds.Count > 0)
            {
                var notLoaded = notLoadedRelationTypeIds
                    .Aggregate("Could not load following RelationTypeIds: ", (current, relationTypeId) => current + "- " + relationTypeId);

                this.logger.LogError(notLoaded);
                return 1;
            }

            using (var session = this.databaseService.Database.CreateSession())
            {
                new Allors.Upgrade(session, this.dataPath).Execute();
                session.Commit();

                new Permissions(session).Sync();
                new Security(session).Apply();

                session.Commit();
            }

            this.logger.LogInformation("End");
            return ExitCode.Success;
        }
    }
}
