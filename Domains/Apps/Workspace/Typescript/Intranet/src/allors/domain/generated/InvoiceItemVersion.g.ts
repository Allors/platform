// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { PriceableVersion } from './PriceableVersion.g';
import { Version } from './Version.g';
import { AgreementTerm } from './AgreementTerm.g';
import { InvoiceVatRateItem } from './InvoiceVatRateItem.g';
import { InvoiceItem } from './InvoiceItem.g';

export interface InvoiceItemVersion extends SessionObject , PriceableVersion {
        InternalComment : string;


        InvoiceTerms : AgreementTerm[];
        AddInvoiceTerm(value: AgreementTerm);
        RemoveInvoiceTerm(value: AgreementTerm);


        TotalInvoiceAdjustment : number;


        InvoiceVatRateItems : InvoiceVatRateItem[];
        AddInvoiceVatRateItem(value: InvoiceVatRateItem);
        RemoveInvoiceVatRateItem(value: InvoiceVatRateItem);


        AdjustmentFor : InvoiceItem;


        Message : string;


        TotalInvoiceAdjustmentCustomerCurrency : number;


        AmountPaid : number;


        Quantity : number;


        Description : string;


}