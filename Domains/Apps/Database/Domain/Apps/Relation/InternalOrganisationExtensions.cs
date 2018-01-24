// --------------------------------------------------------------------------------------------------------------------
// <copyright file="InternalOrganisationExtensions.cs" company="Allors bvba">
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
using System.Collections.Generic;

namespace Allors.Domain
{
    using System;

    public static partial class InternalOrganisationExtensions
    {
        public static void AppsOnDerive(this InternalOrganisation @this, ObjectOnDerive method)
        {
            var derivation = method.Derivation;

            var count = @this.Strategy.Session.Extent<PaymentMethod>().ToArray();
            if (!@this.ExistDefaultPaymentMethod && @this.Strategy.Session.Extent<PaymentMethod>().Count == 1)
            {
                @this.DefaultPaymentMethod = @this.Strategy.Session.Extent<PaymentMethod>().First;
            }

            if (!@this.ExistPurchaseInvoiceCounter)
            {
                @this.PurchaseInvoiceCounter = new CounterBuilder(@this.Strategy.Session).WithUniqueId(Guid.NewGuid()).WithValue(0).Build();
            }

            if (!@this.ExistRequestCounter)
            {
                @this.RequestCounter = new CounterBuilder(@this.Strategy.Session).WithUniqueId(Guid.NewGuid()).WithValue(0).Build();
            }

            if (!@this.ExistQuoteCounter)
            {
                @this.QuoteCounter = new CounterBuilder(@this.Strategy.Session).WithUniqueId(Guid.NewGuid()).WithValue(0).Build();
            }

            if (!@this.ExistPurchaseOrderCounter)
            {
                @this.PurchaseOrderCounter = new CounterBuilder(@this.Strategy.Session).WithUniqueId(Guid.NewGuid()).WithValue(0).Build();
            }

            if (!@this.ExistIncomingShipmentCounter)
            {
                @this.IncomingShipmentCounter = new CounterBuilder(@this.Strategy.Session).WithUniqueId(Guid.NewGuid()).WithValue(0).Build();
            }

            if (!@this.ExistSubAccountCounter)
            {
                @this.SubAccountCounter = new CounterBuilder(@this.Strategy.Session).WithUniqueId(Guid.NewGuid()).WithValue(0).Build();
            }

            if (!@this.ExistDoAccounting)
            {
                @this.DoAccounting = false;
            }

            if (!@this.ExistInvoiceSequence)
            {
                @this.InvoiceSequence = new InvoiceSequences(@this.Strategy.Session).RestartOnFiscalYear;
            }

            if (!@this.ExistFiscalYearStartMonth)
            {
                @this.FiscalYearStartMonth = 1;
            }

            if (!@this.ExistFiscalYearStartDay)
            {
                @this.FiscalYearStartDay = 1;
            }
        }

        public static int NextSubAccountNumber(this InternalOrganisation @this)
        {
            var next = @this.SubAccountCounter.NextElfProefValue();
            return next;
        }

        public static string NextPurchaseInvoiceNumber(this InternalOrganisation @this)
        {
            var purchaseInvoiceNumber = @this.PurchaseInvoiceCounter.NextValue();
            return string.Concat(@this.PurchaseInvoiceNumberPrefix, purchaseInvoiceNumber);
        }

        public static string NextQuoteNumber(this InternalOrganisation @this)
        {
            var quoteNumber = @this.QuoteCounter.NextValue();
            return string.Concat(@this.QuoteNumberPrefix, quoteNumber);
        }
        public static string NextRequestNumber(this InternalOrganisation @this)
        {
            var requestNumber = @this.RequestCounter.NextValue();
            return string.Concat(@this.RequestNumberPrefix, requestNumber);
        }

        public static string NextShipmentNumber(this InternalOrganisation @this)
        {
            var shipmentNumber = @this.IncomingShipmentCounter.NextValue();
            return string.Concat(@this.IncomingShipmentNumberPrefix, shipmentNumber);
        }

        public static string NextPurchaseOrderNumber(this InternalOrganisation @this)
        {
            var purchaseOrderNumber = @this.PurchaseInvoiceCounter.NextValue();
            return string.Concat(@this.PurchaseOrderNumberPrefix, purchaseOrderNumber);
        }

        public static int NextValidElevenTestNumer(int previous)
        {
            var candidate = previous.ToString();
            var valid = false;

            while (!valid)
            {
                candidate = previous.ToString();
                var sum = 0;
                for (var i = candidate.Length; i > 0; i--)
                {
                    sum += int.Parse(candidate.Substring(candidate.Length - i, 1)) * i;
                }

                valid = sum % 11 == 0;

                if (!valid)
                {
                    previous++;
                }
            }

            return int.Parse(candidate);
        }
    }
}