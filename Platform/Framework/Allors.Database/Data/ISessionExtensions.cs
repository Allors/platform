//------------------------------------------------------------------------------------------------- 
// <copyright file="ISessionExtensions.cs" company="Allors bvba">
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
    using System.Linq;

    public static class ISessionExtensions
    {
        public static T[] Resolve<T>(this ISession session, IExtent extent, IReadOnlyDictionary<string, object> arguments = null) where T : IObject
        {
            return extent.Build(session, arguments).Cast<T>().ToArray();
        }

        public static T[] Resolve<T>(this ISession session, IExtent extent, object arguments) where T : IObject
        {
            return extent.Build(session, new Arguments(arguments)).Cast<T>().ToArray();
        }
    }
}