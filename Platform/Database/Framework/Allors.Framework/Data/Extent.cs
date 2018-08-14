//------------------------------------------------------------------------------------------------- 
// <copyright file="Extent.cs" company="Allors bvba">
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

    using Allors.Meta;

    public class Extent : IExtent, IPredicateContainer
    {
        public Extent(IComposite objectType)
        {
            this.ObjectType = objectType;
        }

        public IComposite ObjectType { get; set; }

        public IPredicate Predicate { get; set; }

        Allors.Extent IExtent.Build(ISession session, IReadOnlyDictionary<string, object> arguments)
        {
            var extent = session.Extent(this.ObjectType);
            this.Predicate?.Build(session, arguments, extent.Filter);
            return extent;
        }

        void IPredicateContainer.AddPredicate(IPredicate predicate)
        {
            this.Predicate = predicate;
        }

        public Schema.Extent Save()
        {
            return new Schema.Extent
                       {
                           Kind = Schema.ExtentKind.Predicate,
                           ObjectType = this.ObjectType?.Id,
                           Predicate = this.Predicate?.Save()
                       };

        }
    }
}