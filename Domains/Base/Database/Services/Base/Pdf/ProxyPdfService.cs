// --------------------------------------------------------------------------------------------------------------------
// <copyright file="PdfService.cs" company="Allors bvba">
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

namespace Allors.Services
{
    using System;
    using System.Threading.Tasks;

    public class ProxyPdfService : IPdfService, IDisposable
    {
        public static Func<string, string, string, Task<byte[]>> Subject = async (content, header, footer) => new byte[] { }; 

        public Task<byte[]> FromHtmlToPdf(string content, string header = null, string footer = null)
        {
            return Subject(content, header, footer);
        }

        public void Dispose()
        {
        }
    }
}