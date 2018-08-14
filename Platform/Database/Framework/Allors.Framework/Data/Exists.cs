//------------------------------------------------------------------------------------------------- 
// <copyright file="Exists.cs" company="Allors bvba">
// Copyright 2002-2017 Allors bvba.
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
//-------------------------------------------------------------------------------------------------

namespace Allors.Data
{
    using System.Collections.Generic;

    using Allors.Data.Schema;
    using Allors.Meta;

    public class Exists : IPropertyPredicate
    {
        public Exists(IPropertyType propertyType = null)
        {
            this.PropertyType = propertyType;
        }

        public IPropertyType PropertyType { get; set; }
        
        public Predicate Save()
        {
            return new Predicate
                       {
                           Kind = PredicateKind.Exists,
                           PropertyType = this.PropertyType?.Id
                       };
        }
        
        void IPredicate.Build(ISession session, IReadOnlyDictionary<string, object> arguments, Allors.ICompositePredicate compositePredicate)
        {
            if (this.PropertyType is IRoleType roleType)
            {
                compositePredicate.AddExists(roleType);
            }
            else
            {
                var associationType = (IAssociationType)this.PropertyType;
                compositePredicate.AddExists(associationType);
            }
        }
    }
}