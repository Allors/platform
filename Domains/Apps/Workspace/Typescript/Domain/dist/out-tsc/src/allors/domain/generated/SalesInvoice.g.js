"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class SalesInvoice extends framework_1.SessionObject {
    get CanReadSalesInvoiceState() {
        return this.canRead('SalesInvoiceState');
    }
    get CanWriteSalesInvoiceState() {
        return this.canWrite('SalesInvoiceState');
    }
    get SalesInvoiceState() {
        return this.get('SalesInvoiceState');
    }
    set SalesInvoiceState(value) {
        this.set('SalesInvoiceState', value);
    }
    get CanReadCurrentVersion() {
        return this.canRead('CurrentVersion');
    }
    get CanWriteCurrentVersion() {
        return this.canWrite('CurrentVersion');
    }
    get CurrentVersion() {
        return this.get('CurrentVersion');
    }
    set CurrentVersion(value) {
        this.set('CurrentVersion', value);
    }
    get CanReadAllVersions() {
        return this.canRead('AllVersions');
    }
    get CanWriteAllVersions() {
        return this.canWrite('AllVersions');
    }
    get AllVersions() {
        return this.get('AllVersions');
    }
    AddAllVersion(value) {
        return this.add('AllVersions', value);
    }
    RemoveAllVersion(value) {
        return this.remove('AllVersions', value);
    }
    set AllVersions(value) {
        this.set('AllVersions', value);
    }
    get CanReadTotalListPrice() {
        return this.canRead('TotalListPrice');
    }
    get CanWriteTotalListPrice() {
        return this.canWrite('TotalListPrice');
    }
    get TotalListPrice() {
        return this.get('TotalListPrice');
    }
    set TotalListPrice(value) {
        this.set('TotalListPrice', value);
    }
    get CanReadBillToContactMechanism() {
        return this.canRead('BillToContactMechanism');
    }
    get CanWriteBillToContactMechanism() {
        return this.canWrite('BillToContactMechanism');
    }
    get BillToContactMechanism() {
        return this.get('BillToContactMechanism');
    }
    set BillToContactMechanism(value) {
        this.set('BillToContactMechanism', value);
    }
    get CanReadSalesInvoiceType() {
        return this.canRead('SalesInvoiceType');
    }
    get CanWriteSalesInvoiceType() {
        return this.canWrite('SalesInvoiceType');
    }
    get SalesInvoiceType() {
        return this.get('SalesInvoiceType');
    }
    set SalesInvoiceType(value) {
        this.set('SalesInvoiceType', value);
    }
    get CanReadInitialProfitMargin() {
        return this.canRead('InitialProfitMargin');
    }
    get InitialProfitMargin() {
        return this.get('InitialProfitMargin');
    }
    get CanReadPaymentMethod() {
        return this.canRead('PaymentMethod');
    }
    get CanWritePaymentMethod() {
        return this.canWrite('PaymentMethod');
    }
    get PaymentMethod() {
        return this.get('PaymentMethod');
    }
    set PaymentMethod(value) {
        this.set('PaymentMethod', value);
    }
    get CanReadSalesOrder() {
        return this.canRead('SalesOrder');
    }
    get CanWriteSalesOrder() {
        return this.canWrite('SalesOrder');
    }
    get SalesOrder() {
        return this.get('SalesOrder');
    }
    set SalesOrder(value) {
        this.set('SalesOrder', value);
    }
    get CanReadInitialMarkupPercentage() {
        return this.canRead('InitialMarkupPercentage');
    }
    get InitialMarkupPercentage() {
        return this.get('InitialMarkupPercentage');
    }
    get CanReadMaintainedMarkupPercentage() {
        return this.canRead('MaintainedMarkupPercentage');
    }
    get MaintainedMarkupPercentage() {
        return this.get('MaintainedMarkupPercentage');
    }
    get CanReadSalesReps() {
        return this.canRead('SalesReps');
    }
    get SalesReps() {
        return this.get('SalesReps');
    }
    get CanReadShipment() {
        return this.canRead('Shipment');
    }
    get Shipment() {
        return this.get('Shipment');
    }
    get CanReadMaintainedProfitMargin() {
        return this.canRead('MaintainedProfitMargin');
    }
    get MaintainedProfitMargin() {
        return this.get('MaintainedProfitMargin');
    }
    get CanReadBillToCustomer() {
        return this.canRead('BillToCustomer');
    }
    get CanWriteBillToCustomer() {
        return this.canWrite('BillToCustomer');
    }
    get BillToCustomer() {
        return this.get('BillToCustomer');
    }
    set BillToCustomer(value) {
        this.set('BillToCustomer', value);
    }
    get CanReadSalesInvoiceItems() {
        return this.canRead('SalesInvoiceItems');
    }
    get CanWriteSalesInvoiceItems() {
        return this.canWrite('SalesInvoiceItems');
    }
    get SalesInvoiceItems() {
        return this.get('SalesInvoiceItems');
    }
    AddSalesInvoiceItem(value) {
        return this.add('SalesInvoiceItems', value);
    }
    RemoveSalesInvoiceItem(value) {
        return this.remove('SalesInvoiceItems', value);
    }
    set SalesInvoiceItems(value) {
        this.set('SalesInvoiceItems', value);
    }
    get CanReadTotalListPriceCustomerCurrency() {
        return this.canRead('TotalListPriceCustomerCurrency');
    }
    get TotalListPriceCustomerCurrency() {
        return this.get('TotalListPriceCustomerCurrency');
    }
    get CanReadShipToCustomer() {
        return this.canRead('ShipToCustomer');
    }
    get CanWriteShipToCustomer() {
        return this.canWrite('ShipToCustomer');
    }
    get ShipToCustomer() {
        return this.get('ShipToCustomer');
    }
    set ShipToCustomer(value) {
        this.set('ShipToCustomer', value);
    }
    get CanReadBilledFromContactMechanism() {
        return this.canRead('BilledFromContactMechanism');
    }
    get CanWriteBilledFromContactMechanism() {
        return this.canWrite('BilledFromContactMechanism');
    }
    get BilledFromContactMechanism() {
        return this.get('BilledFromContactMechanism');
    }
    set BilledFromContactMechanism(value) {
        this.set('BilledFromContactMechanism', value);
    }
    get CanReadTotalPurchasePrice() {
        return this.canRead('TotalPurchasePrice');
    }
    get CanWriteTotalPurchasePrice() {
        return this.canWrite('TotalPurchasePrice');
    }
    get TotalPurchasePrice() {
        return this.get('TotalPurchasePrice');
    }
    set TotalPurchasePrice(value) {
        this.set('TotalPurchasePrice', value);
    }
    get CanReadSalesChannel() {
        return this.canRead('SalesChannel');
    }
    get CanWriteSalesChannel() {
        return this.canWrite('SalesChannel');
    }
    get SalesChannel() {
        return this.get('SalesChannel');
    }
    set SalesChannel(value) {
        this.set('SalesChannel', value);
    }
    get CanReadCustomers() {
        return this.canRead('Customers');
    }
    get Customers() {
        return this.get('Customers');
    }
    get CanReadShipToAddress() {
        return this.canRead('ShipToAddress');
    }
    get CanWriteShipToAddress() {
        return this.canWrite('ShipToAddress');
    }
    get ShipToAddress() {
        return this.get('ShipToAddress');
    }
    set ShipToAddress(value) {
        this.set('ShipToAddress', value);
    }
    get CanReadStore() {
        return this.canRead('Store');
    }
    get CanWriteStore() {
        return this.canWrite('Store');
    }
    get Store() {
        return this.get('Store');
    }
    set Store(value) {
        this.set('Store', value);
    }
    get CanReadInternalComment() {
        return this.canRead('InternalComment');
    }
    get CanWriteInternalComment() {
        return this.canWrite('InternalComment');
    }
    get InternalComment() {
        return this.get('InternalComment');
    }
    set InternalComment(value) {
        this.set('InternalComment', value);
    }
    get CanReadTotalShippingAndHandlingCustomerCurrency() {
        return this.canRead('TotalShippingAndHandlingCustomerCurrency');
    }
    get CanWriteTotalShippingAndHandlingCustomerCurrency() {
        return this.canWrite('TotalShippingAndHandlingCustomerCurrency');
    }
    get TotalShippingAndHandlingCustomerCurrency() {
        return this.get('TotalShippingAndHandlingCustomerCurrency');
    }
    set TotalShippingAndHandlingCustomerCurrency(value) {
        this.set('TotalShippingAndHandlingCustomerCurrency', value);
    }
    get CanReadCustomerCurrency() {
        return this.canRead('CustomerCurrency');
    }
    get CustomerCurrency() {
        return this.get('CustomerCurrency');
    }
    get CanReadDescription() {
        return this.canRead('Description');
    }
    get CanWriteDescription() {
        return this.canWrite('Description');
    }
    get Description() {
        return this.get('Description');
    }
    set Description(value) {
        this.set('Description', value);
    }
    get CanReadShippingAndHandlingCharge() {
        return this.canRead('ShippingAndHandlingCharge');
    }
    get CanWriteShippingAndHandlingCharge() {
        return this.canWrite('ShippingAndHandlingCharge');
    }
    get ShippingAndHandlingCharge() {
        return this.get('ShippingAndHandlingCharge');
    }
    set ShippingAndHandlingCharge(value) {
        this.set('ShippingAndHandlingCharge', value);
    }
    get CanReadTotalFeeCustomerCurrency() {
        return this.canRead('TotalFeeCustomerCurrency');
    }
    get TotalFeeCustomerCurrency() {
        return this.get('TotalFeeCustomerCurrency');
    }
    get CanReadFee() {
        return this.canRead('Fee');
    }
    get CanWriteFee() {
        return this.canWrite('Fee');
    }
    get Fee() {
        return this.get('Fee');
    }
    set Fee(value) {
        this.set('Fee', value);
    }
    get CanReadTotalExVatCustomerCurrency() {
        return this.canRead('TotalExVatCustomerCurrency');
    }
    get TotalExVatCustomerCurrency() {
        return this.get('TotalExVatCustomerCurrency');
    }
    get CanReadCustomerReference() {
        return this.canRead('CustomerReference');
    }
    get CanWriteCustomerReference() {
        return this.canWrite('CustomerReference');
    }
    get CustomerReference() {
        return this.get('CustomerReference');
    }
    set CustomerReference(value) {
        this.set('CustomerReference', value);
    }
    get CanReadDiscountAdjustment() {
        return this.canRead('DiscountAdjustment');
    }
    get CanWriteDiscountAdjustment() {
        return this.canWrite('DiscountAdjustment');
    }
    get DiscountAdjustment() {
        return this.get('DiscountAdjustment');
    }
    set DiscountAdjustment(value) {
        this.set('DiscountAdjustment', value);
    }
    get CanReadAmountPaid() {
        return this.canRead('AmountPaid');
    }
    get AmountPaid() {
        return this.get('AmountPaid');
    }
    get CanReadTotalDiscount() {
        return this.canRead('TotalDiscount');
    }
    get TotalDiscount() {
        return this.get('TotalDiscount');
    }
    get CanReadBillingAccount() {
        return this.canRead('BillingAccount');
    }
    get CanWriteBillingAccount() {
        return this.canWrite('BillingAccount');
    }
    get BillingAccount() {
        return this.get('BillingAccount');
    }
    set BillingAccount(value) {
        this.set('BillingAccount', value);
    }
    get CanReadTotalIncVat() {
        return this.canRead('TotalIncVat');
    }
    get TotalIncVat() {
        return this.get('TotalIncVat');
    }
    get CanReadTotalSurcharge() {
        return this.canRead('TotalSurcharge');
    }
    get TotalSurcharge() {
        return this.get('TotalSurcharge');
    }
    get CanReadTotalBasePrice() {
        return this.canRead('TotalBasePrice');
    }
    get TotalBasePrice() {
        return this.get('TotalBasePrice');
    }
    get CanReadTotalVatCustomerCurrency() {
        return this.canRead('TotalVatCustomerCurrency');
    }
    get TotalVatCustomerCurrency() {
        return this.get('TotalVatCustomerCurrency');
    }
    get CanReadInvoiceDate() {
        return this.canRead('InvoiceDate');
    }
    get CanWriteInvoiceDate() {
        return this.canWrite('InvoiceDate');
    }
    get InvoiceDate() {
        return this.get('InvoiceDate');
    }
    set InvoiceDate(value) {
        this.set('InvoiceDate', value);
    }
    get CanReadEntryDate() {
        return this.canRead('EntryDate');
    }
    get EntryDate() {
        return this.get('EntryDate');
    }
    get CanReadTotalIncVatCustomerCurrency() {
        return this.canRead('TotalIncVatCustomerCurrency');
    }
    get TotalIncVatCustomerCurrency() {
        return this.get('TotalIncVatCustomerCurrency');
    }
    get CanReadTotalShippingAndHandling() {
        return this.canRead('TotalShippingAndHandling');
    }
    get TotalShippingAndHandling() {
        return this.get('TotalShippingAndHandling');
    }
    get CanReadTotalBasePriceCustomerCurrency() {
        return this.canRead('TotalBasePriceCustomerCurrency');
    }
    get TotalBasePriceCustomerCurrency() {
        return this.get('TotalBasePriceCustomerCurrency');
    }
    get CanReadSurchargeAdjustment() {
        return this.canRead('SurchargeAdjustment');
    }
    get CanWriteSurchargeAdjustment() {
        return this.canWrite('SurchargeAdjustment');
    }
    get SurchargeAdjustment() {
        return this.get('SurchargeAdjustment');
    }
    set SurchargeAdjustment(value) {
        this.set('SurchargeAdjustment', value);
    }
    get CanReadTotalExVat() {
        return this.canRead('TotalExVat');
    }
    get TotalExVat() {
        return this.get('TotalExVat');
    }
    get CanReadInvoiceTerms() {
        return this.canRead('InvoiceTerms');
    }
    get CanWriteInvoiceTerms() {
        return this.canWrite('InvoiceTerms');
    }
    get InvoiceTerms() {
        return this.get('InvoiceTerms');
    }
    AddInvoiceTerm(value) {
        return this.add('InvoiceTerms', value);
    }
    RemoveInvoiceTerm(value) {
        return this.remove('InvoiceTerms', value);
    }
    set InvoiceTerms(value) {
        this.set('InvoiceTerms', value);
    }
    get CanReadTotalSurchargeCustomerCurrency() {
        return this.canRead('TotalSurchargeCustomerCurrency');
    }
    get TotalSurchargeCustomerCurrency() {
        return this.get('TotalSurchargeCustomerCurrency');
    }
    get CanReadInvoiceNumber() {
        return this.canRead('InvoiceNumber');
    }
    get CanWriteInvoiceNumber() {
        return this.canWrite('InvoiceNumber');
    }
    get InvoiceNumber() {
        return this.get('InvoiceNumber');
    }
    set InvoiceNumber(value) {
        this.set('InvoiceNumber', value);
    }
    get CanReadMessage() {
        return this.canRead('Message');
    }
    get CanWriteMessage() {
        return this.canWrite('Message');
    }
    get Message() {
        return this.get('Message');
    }
    set Message(value) {
        this.set('Message', value);
    }
    get CanReadVatRegime() {
        return this.canRead('VatRegime');
    }
    get CanWriteVatRegime() {
        return this.canWrite('VatRegime');
    }
    get VatRegime() {
        return this.get('VatRegime');
    }
    set VatRegime(value) {
        this.set('VatRegime', value);
    }
    get CanReadTotalDiscountCustomerCurrency() {
        return this.canRead('TotalDiscountCustomerCurrency');
    }
    get TotalDiscountCustomerCurrency() {
        return this.get('TotalDiscountCustomerCurrency');
    }
    get CanReadTotalVat() {
        return this.canRead('TotalVat');
    }
    get TotalVat() {
        return this.get('TotalVat');
    }
    get CanReadTotalFee() {
        return this.canRead('TotalFee');
    }
    get TotalFee() {
        return this.get('TotalFee');
    }
    get CanReadContactPerson() {
        return this.canRead('ContactPerson');
    }
    get CanWriteContactPerson() {
        return this.canWrite('ContactPerson');
    }
    get ContactPerson() {
        return this.get('ContactPerson');
    }
    set ContactPerson(value) {
        this.set('ContactPerson', value);
    }
    get CanReadLocale() {
        return this.canRead('Locale');
    }
    get CanWriteLocale() {
        return this.canWrite('Locale');
    }
    get Locale() {
        return this.get('Locale');
    }
    set Locale(value) {
        this.set('Locale', value);
    }
    get CanReadComment() {
        return this.canRead('Comment');
    }
    get CanWriteComment() {
        return this.canWrite('Comment');
    }
    get Comment() {
        return this.get('Comment');
    }
    set Comment(value) {
        this.set('Comment', value);
    }
    get CanReadPrintContent() {
        return this.canRead('PrintContent');
    }
    get CanWritePrintContent() {
        return this.canWrite('PrintContent');
    }
    get PrintContent() {
        return this.get('PrintContent');
    }
    set PrintContent(value) {
        this.set('PrintContent', value);
    }
    get CanReadCreatedBy() {
        return this.canRead('CreatedBy');
    }
    get CanWriteCreatedBy() {
        return this.canWrite('CreatedBy');
    }
    get CreatedBy() {
        return this.get('CreatedBy');
    }
    set CreatedBy(value) {
        this.set('CreatedBy', value);
    }
    get CanReadLastModifiedBy() {
        return this.canRead('LastModifiedBy');
    }
    get CanWriteLastModifiedBy() {
        return this.canWrite('LastModifiedBy');
    }
    get LastModifiedBy() {
        return this.get('LastModifiedBy');
    }
    set LastModifiedBy(value) {
        this.set('LastModifiedBy', value);
    }
    get CanReadCreationDate() {
        return this.canRead('CreationDate');
    }
    get CanWriteCreationDate() {
        return this.canWrite('CreationDate');
    }
    get CreationDate() {
        return this.get('CreationDate');
    }
    set CreationDate(value) {
        this.set('CreationDate', value);
    }
    get CanReadLastModifiedDate() {
        return this.canRead('LastModifiedDate');
    }
    get CanWriteLastModifiedDate() {
        return this.canWrite('LastModifiedDate');
    }
    get LastModifiedDate() {
        return this.get('LastModifiedDate');
    }
    set LastModifiedDate(value) {
        this.set('LastModifiedDate', value);
    }
    get CanExecuteSend() {
        return this.canExecute('Send');
    }
    get Send() {
        return new framework_1.Method(this, 'Send');
    }
    get CanExecuteCancelInvoice() {
        return this.canExecute('CancelInvoice');
    }
    get CancelInvoice() {
        return new framework_1.Method(this, 'CancelInvoice');
    }
    get CanExecuteWriteOff() {
        return this.canExecute('WriteOff');
    }
    get WriteOff() {
        return new framework_1.Method(this, 'WriteOff');
    }
}
exports.SalesInvoice = SalesInvoice;
//# sourceMappingURL=SalesInvoice.g.js.map