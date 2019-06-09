//------------------------------------------------------------------------------------------------- 
// <copyright file="PredicateExtensions.cs" company="Allors bvba">
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

namespace Allors.Protocol.Data
{
    using System;
    using System.Linq;

    using Allors.Data;
    using Allors.Meta;

    public static class PredicateExtensions 
    {
        public static IPredicate Load(this Predicate @this, ISession session)
        {
            switch (@this.Kind)
            {
                case PredicateKind.And:
                    return new And
                    {
                        Operands = @this.Operands.Select(v => v.Load(session)).ToArray()
                    };

                case PredicateKind.Or:
                    return new Or
                    {
                        Operands = @this.Operands.Select(v => v.Load(session)).ToArray()
                    };

                case PredicateKind.Not:
                    return new Not
                    {
                        Operand = @this.Operand.Load(session)
                    };

                default:
                    var propertyType = @this.PropertyType != null ? (IPropertyType)session.Database.ObjectFactory.MetaPopulation.Find(@this.PropertyType.Value) : null;
                    var roleType = @this.RoleType != null ? (IRoleType)session.Database.ObjectFactory.MetaPopulation.Find(@this.RoleType.Value) : null;

                    switch (@this.Kind)
                    {
                        case PredicateKind.Instanceof:

                            return new Instanceof(@this.ObjectType != null ? (IComposite)session.Database.MetaPopulation.Find(@this.ObjectType.Value) : null)
                            {
                                PropertyType = propertyType
                            };

                        case PredicateKind.Exists:

                            return new Exists
                            {
                                PropertyType = propertyType,
                                Parameter = @this.Parameter
                            };

                        case PredicateKind.Equals:

                            var equals = new Equals(propertyType) { Parameter = @this.Parameter };
                            if (@this.Object != null)
                            {
                                @equals.Object = session.Instantiate(@this.Object);
                            }
                            else if (@this.Value != null)
                            {
                                var value = Convert.ToValue((IUnit)((IRoleType)propertyType)?.ObjectType, @this.Value);
                                @equals.Value = value;
                            }

                            return @equals;

                        case PredicateKind.Contains:

                            return new Contains
                            {
                                PropertyType = propertyType,
                                Parameter = @this.Parameter,
                                Object = session.Instantiate(@this.Object)
                            };

                        case PredicateKind.ContainedIn:

                            var containedIn = new ContainedIn(propertyType) { Parameter = @this.Parameter };
                            if (@this.Objects != null)
                            {
                                containedIn.Objects = @this.Objects.Select(session.Instantiate).ToArray();
                            }
                            else if (@this.Extent != null)
                            {
                                containedIn.Extent = ExtentExtensions.Load(@this.Extent, session);
                            }

                            return containedIn;


                        case PredicateKind.Between:

                            return new Between(roleType)
                            {
                                Parameter = @this.Parameter,
                                Values = @this.Values.Select(v => Convert.ToValue((IUnit)roleType?.ObjectType, v)).ToArray()
                            };

                        case PredicateKind.GreaterThan:

                            return new GreaterThan(roleType)
                            {
                                Parameter = @this.Parameter,
                                Value = Convert.ToValue((IUnit)roleType?.ObjectType, @this.Value)
                            };

                        case PredicateKind.LessThan:

                            return new LessThan(roleType)
                            {
                                Parameter = @this.Parameter,
                                Value = Convert.ToValue((IUnit)roleType?.ObjectType, @this.Value)
                            };

                        case PredicateKind.Like:

                            return new Like(roleType)
                            {
                                Parameter = @this.Parameter,
                                Value = @this.Value
                            };

                        default:
                            throw new Exception("Unknown predicate kind " + @this.Kind);
                    }
            }
        }

    }
}