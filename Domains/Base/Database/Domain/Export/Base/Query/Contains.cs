// --------------------------------------------------------------------------------------------------------------------
// <copyright file="Contains.cs" company="Allors bvba">
//   Copyright 2002-2017 Allors bvba.
//
// Dual Licensed under
//   a) the General Public Licence v3 (GPL)
//   b) the Allors License
//
// The GPL License is included in the file gpl.txt.
// The Allors License is an addendum to your contract.
//
// Allors Applications is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// For more information visit http://www.allors.com/legal
// </copyright>
// --------------------------------------------------------------------------------------------------------------------

namespace Allors.Domain.Query
{
    using Allors.Meta;

    public class Contains : Predicate
    {
        public AssociationType AssociationType { get; set; }

        public RoleType RoleType { get; set; }

        public long? ObjectId { get; set; }

        public override void Build(ISession session, ICompositePredicate compositePredicate)
        {
            if (this.AssociationType != null)
            {
                compositePredicate.AddContains(this.AssociationType, session.Instantiate(this.ObjectId.Value));
            }
            else
            {
                compositePredicate.AddContains(this.RoleType, session.Instantiate(this.ObjectId.Value));
            }
        }

        public override void Validate(QueryValidation validation)
        {
            this.AssertAtLeastOne(validation, "AssociationType or RoleType is required", v => v.AssociationType, v => v.RoleType);
            this.AssertExists(validation, "ObjectId is required", v => v.ObjectId);
        }

        public override string ToString()
        {
            return $"{base.ToString()} {this.AssociationType}{this.RoleType}";
        }
    }
}