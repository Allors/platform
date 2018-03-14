﻿// ------------------------------------------------------------------------------------------------- 
// <copyright file="ProjectInfo.cs" company="Allors bvba">
// Copyright 2002-2009 Allors bvba.
// 
// Dual Licensed under
//   a) the Lesser General Public Licence v3 (LGPL)
//   b) the Allors License
// 
// The LGPL License is included in the file lgpl.txt.
// The Allors License is an addendum to your contract.
// 
// Allors Platform is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// For more information visit http://www.allors.com/legal
// </copyright>
// -------------------------------------------------------------------------------------------------

namespace Allors.Repository.Roslyn
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;

    using Allors.Repository.Attributes;

    using Microsoft.CodeAnalysis;
    using Microsoft.CodeAnalysis.Emit;

    internal class ProjectInfo 
    {
        public Project Project { get; }

        public Solution Solution { get; }

        public Compilation Compilation { get; }

        public Dictionary<SyntaxTree, SemanticModel> SemanticModelBySyntaxTree { get; }

        public Dictionary<SyntaxTree, Document> DocumentBySyntaxTree { get; }

        public INamedTypeSymbol DomainAttributeType { get; }

        public INamedTypeSymbol ExtendAttributeType { get; }

        public System.Reflection.Assembly Assembly { get; set; }

        internal ProjectInfo(Project project)
        {
            this.Project = project;
            this.Solution = project.Solution;
            this.Compilation = project.GetCompilationAsync().Result;

            this.SemanticModelBySyntaxTree = this.Compilation.SyntaxTrees.ToDictionary(v => v, v => this.Compilation.GetSemanticModel(v));
            this.DocumentBySyntaxTree = this.Compilation.SyntaxTrees.ToDictionary(v => v, v => this.Solution.GetDocument(v));

            this.DomainAttributeType = this.Compilation.GetTypeByMetadataName(typeof(DomainAttribute).FullName);
            this.ExtendAttributeType = this.Compilation.GetTypeByMetadataName(typeof(ExtendsAttribute).FullName);

            using (var ms = new MemoryStream())
            {
                EmitResult result = this.Compilation.Emit(ms);

                if (!result.Success)
                {
                    var failures = result.Diagnostics.Where(diagnostic =>
                        diagnostic.IsWarningAsError ||
                        diagnostic.Severity == DiagnosticSeverity.Error);

                    var text = string.Join("\n", failures.Select(x => x.Id + ": " + x.GetMessage()));
                    throw new Exception(text);
                }
                else
                {
                    ms.Seek(0, SeekOrigin.Begin);
                    this.Assembly = System.Reflection.Assembly.Load(ms.ToArray());
                }
            }

        }
    }
}