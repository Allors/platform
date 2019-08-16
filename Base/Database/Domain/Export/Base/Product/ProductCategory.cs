// --------------------------------------------------------------------------------------------------------------------
// <copyright file="ProductCategory.cs" company="Allors bvba">
//   Copyright 2002-2012 Allors bvba.
// Dual Licensed under
//   a) the General Public Licence v3 (GPL)
//   b) the Allors License
// The GPL License is included in the file gpl.txt.
// The Allors License is an addendum to your contract.
// Allors Applications is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// For more information visit http://www.allors.com/legal
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

namespace Allors.Domain
{
    using System.Linq;

    public partial class ProductCategory
    {
        public override string ToString() => this.Name;

        public void BaseOnBuild(ObjectOnBuild method)
        {
            if (!this.ExistCatScope)
            {
                this.CatScope = new CatScopes(this.Strategy.Session).Public;
            }
        }

        public void BaseOnPreDerive(ObjectOnPreDerive method)
        {
            var derivation = method.Derivation;

            derivation.AddDependency(this.PrimaryParent, this);
            foreach (Object parent in this.SecondaryParents)
            {
                derivation.AddDependency(parent, this);
            }
        }

        public void BaseOnDerive(ObjectOnDerive method)
        {
            var derivation = method.Derivation;
            var defaultLocale = this.Strategy.Session.GetSingleton().DefaultLocale;

            if (this.LocalisedNames.Any(x => x.Locale.Equals(defaultLocale)))
            {
                this.Name = this.LocalisedNames.First(x => x.Locale.Equals(defaultLocale)).Text;
            }

            if (this.LocalisedDescriptions.Any(x => x.Locale.Equals(defaultLocale)))
            {
                this.Description = this.LocalisedDescriptions.First(x => x.Locale.Equals(defaultLocale)).Text;
            }

            if (!this.ExistCategoryImage)
            {
                this.CategoryImage = this.Strategy.Session.GetSingleton().Settings.NoImageAvailableImage;
            }

            {
                var primaryAncestors = new List<ProductCategory>();
                var primaryAncestor = this.PrimaryParent;
                while (primaryAncestor != null)
                {
                    if (primaryAncestors.Contains(primaryAncestor))
                    {
                        var cycle = string.Join(" -> ", primaryAncestors.Append(primaryAncestor).Select(v => v.Name));
                        derivation.Validation.AddError(this, this.Meta.PrimaryParent, "Cycle detected in " + cycle);
                        break;
                    }

                    primaryAncestors.Add(primaryAncestor);
                    primaryAncestor = primaryAncestor.PrimaryParent;
                }

                this.PrimaryAncestors = primaryAncestors.ToArray();
            }

            this.Children = this.ProductCategoriesWherePrimaryParent.Union(this.ProductCategoriesWhereSecondaryParent).ToArray();

            {
                var descendants = new List<ProductCategory>();
                var children = this.Children.ToArray();
                while (children.Length > 0)
                {
                    if (children.Any(v => descendants.Contains(v)))
                    {
                        var cycle = string.Join(" -> ", descendants.Union(children).Select(v => v.Name));
                        derivation.Validation.AddError(this, this.Meta.Children, "Cycle detected in " + cycle);
                        break;
                    }

                    descendants.AddRange(children);
                    children = children.SelectMany(v => v.Children).ToArray();
                }

                this.Descendants = descendants.ToArray();
            }

            var descendantsAndSelf = this.Descendants.Append(this).ToArray();

            this.AllProducts = descendantsAndSelf
                .SelectMany(v => v.Products)
                .ToArray();

            this.AllParts = this.AllProducts
                .Select(v => v is Part part ? part : v is NonUnifiedGood nonUnifiedGood ? nonUnifiedGood.Part : null)
                .Where(v => v != null)
                .ToArray();

            this.AllSerialisedItemsForSale = descendantsAndSelf
                .SelectMany(
                    v => this.AllParts
                    .SelectMany(w => w.SerialisedItems)
                    .Where(w => w.AvailableForSale))
                .ToArray();

            this.AllNonSerialisedInventoryItemsForSale = descendantsAndSelf
                .SelectMany(
                    v => this.AllParts
                    .SelectMany(w => w.InventoryItemsWherePart)
                    .OfType<NonSerialisedInventoryItem>()
                    .Where(w => w.NonSerialisedInventoryItemState.AvailableForSale))
                .ToArray();
        }
    }
}