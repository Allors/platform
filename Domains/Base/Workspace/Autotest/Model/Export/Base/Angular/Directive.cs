// <copyright file="Directive.cs" company="Allors bvba">
// Copyright (c) Allors bvba. All Rights Reserved.
// Licensed under the LGPL v3 license.
// </copyright>

using Autotest.Testers;

namespace Autotest.Angular
{
    using System.Collections.Generic;
    using System.Linq;
    using Autotest.Html;
    using Autotest.Typescript;
    using Newtonsoft.Json.Linq;

    public partial class Directive
    {
        public Dictionary<Element, Directive> ComponentByElement { get; set; }

        public Module DeclaringModule
        {
            get { return this.Project.Modules.First(v => v.DeclaredDirectives.Contains(this)); }
        }

        public Dictionary<Element, Directive[]> AttributeDirectivesByElement { get; set; }

        public Element[] ElementsWithDirectives { get; set; }

        public string ExportAs { get; set; }

        public bool IsComponent { get; set; }

        public JToken Json { get; set; }

        public Project Project { get; set; }

        public Reference Reference { get; set; }

        public string Selector { get; set; }

        public Template Template { get; set; }

        public Tester[] Testers { get; set; }

        public Class Type { get; set; }

        public void BaseLoad()
        {
            this.IsComponent = this.Json["isComponent"]?.Value<bool>() ?? false;
            this.Selector = this.Json["selector"]?.Value<string>();
            this.ExportAs = this.Json["exportAs"]?.Value<string>();

            var jsonTemplate = this.Json["template"];
            this.Template = jsonTemplate != null ? new Template(this, jsonTemplate) : null;
            this.Template?.BaseLoad();

            var typeTemplate = this.Json["type"];
            this.Type = typeTemplate != null ? new Class(this, typeTemplate) : null;
            this.Type?.BaseLoad();

            if (this.Template != null)
            {
                this.ComponentByElement = this.Template.Elements
                    .Select(v => new
                    {
                        element = v,
                        component = this.DeclaringModule.LookupComponent(v),
                    })
                    .Where(v => v.component != null)
                    .ToDictionary(v => v.element, v => v.component);

                this.AttributeDirectivesByElement = this.Template.Elements
                    .Select(v => new
                    {
                        element = v,
                        directives = this.DeclaringModule.LookupAttributeDirectives(v),
                    })
                    .Where(v => v.directives.Length > 0)
                    .ToDictionary(v => v.element, v => v.directives);

                foreach (var kvp in this.ComponentByElement)
                {
                    kvp.Key.Component = kvp.Value;
                }

                foreach (var kvp in this.AttributeDirectivesByElement)
                {
                    kvp.Key.AttributeDirectives = kvp.Value;
                }

                foreach (var element in this.ComponentByElement.Keys.Union(this.AttributeDirectivesByElement.Keys))
                {
                    this.ComponentByElement.TryGetValue(element, out var component);
                    this.AttributeDirectivesByElement.TryGetValue(element, out var attributeDirectives);

                    element.Directives = new[] {component}
                        .Concat(attributeDirectives ?? new Directive[0])
                        .Where(v => v != null)
                        .ToArray();
                }

                this.ElementsWithDirectives = this.Template.Elements
                    .Where(v => v.Directives != null && v.Directives.Length > 0)
                    .ToArray();

                this.Testers = this.ElementsWithDirectives
                    .Select(TesterFactory.Create)
                    .Where(v => v != null)
                    .ToArray();
            }
        }
    }
}