"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class PurchaseOrder extends framework_1.SessionObject {
    get CanReadPurchaseOrderState() {
        return this.canRead('PurchaseOrderState');
    }
    get CanWritePurchaseOrderState() {
        return this.canWrite('PurchaseOrderState');
    }
    get PurchaseOrderState() {
        return this.get('PurchaseOrderState');
    }
    set PurchaseOrderState(value) {
        this.set('PurchaseOrderState', value);
    }
    get CanReadPurchaseOrderPaymentState() {
        return this.canRead('PurchaseOrderPaymentState');
    }
    get CanWritePurchaseOrderPaymentState() {
        return this.canWrite('PurchaseOrderPaymentState');
    }
    get PurchaseOrderPaymentState() {
        return this.get('PurchaseOrderPaymentState');
    }
    set PurchaseOrderPaymentState(value) {
        this.set('PurchaseOrderPaymentState', value);
    }
    get CanReadPurchaseOrderShipmentState() {
        return this.canRead('PurchaseOrderShipmentState');
    }
    get CanWritePurchaseOrderShipmentState() {
        return this.canWrite('PurchaseOrderShipmentState');
    }
    get PurchaseOrderShipmentState() {
        return this.get('PurchaseOrderShipmentState');
    }
    set PurchaseOrderShipmentState(value) {
        this.set('PurchaseOrderShipmentState', value);
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
    get CanReadCustomerCurrency() {
        return this.canRead('CustomerCurrency');
    }
    get CustomerCurrency() {
        return this.get('CustomerCurrency');
    }
    get CanReadTotalBasePriceCustomerCurrency() {
        return this.canRead('TotalBasePriceCustomerCurrency');
    }
    get TotalBasePriceCustomerCurrency() {
        return this.get('TotalBasePriceCustomerCurrency');
    }
    get CanReadTotalIncVatCustomerCurrency() {
        return this.canRead('TotalIncVatCustomerCurrency');
    }
    get TotalIncVatCustomerCurrency() {
        return this.get('TotalIncVatCustomerCurrency');
    }
    get CanReadTotalDiscountCustomerCurrency() {
        return this.canRead('TotalDiscountCustomerCurrency');
    }
    get TotalDiscountCustomerCurrency() {
        return this.get('TotalDiscountCustomerCurrency');
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
    get CanReadTotalExVat() {
        return this.canRead('TotalExVat');
    }
    get TotalExVat() {
        return this.get('TotalExVat');
    }
    get CanReadOrderTerms() {
        return this.canRead('OrderTerms');
    }
    get CanWriteOrderTerms() {
        return this.canWrite('OrderTerms');
    }
    get OrderTerms() {
        return this.get('OrderTerms');
    }
    AddOrderTerm(value) {
        return this.add('OrderTerms', value);
    }
    RemoveOrderTerm(value) {
        return this.remove('OrderTerms', value);
    }
    set OrderTerms(value) {
        this.set('OrderTerms', value);
    }
    get CanReadTotalVat() {
        return this.canRead('TotalVat');
    }
    get TotalVat() {
        return this.get('TotalVat');
    }
    get CanReadTotalSurcharge() {
        return this.canRead('TotalSurcharge');
    }
    get TotalSurcharge() {
        return this.get('TotalSurcharge');
    }
    get CanReadValidOrderItems() {
        return this.canRead('ValidOrderItems');
    }
    get ValidOrderItems() {
        return this.get('ValidOrderItems');
    }
    get CanReadOrderNumber() {
        return this.canRead('OrderNumber');
    }
    get OrderNumber() {
        return this.get('OrderNumber');
    }
    get CanReadTotalVatCustomerCurrency() {
        return this.canRead('TotalVatCustomerCurrency');
    }
    get TotalVatCustomerCurrency() {
        return this.get('TotalVatCustomerCurrency');
    }
    get CanReadTotalDiscount() {
        return this.canRead('TotalDiscount');
    }
    get TotalDiscount() {
        return this.get('TotalDiscount');
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
    get CanReadTotalShippingAndHandlingCustomerCurrency() {
        return this.canRead('TotalShippingAndHandlingCustomerCurrency');
    }
    get TotalShippingAndHandlingCustomerCurrency() {
        return this.get('TotalShippingAndHandlingCustomerCurrency');
    }
    get CanReadEntryDate() {
        return this.canRead('EntryDate');
    }
    get EntryDate() {
        return this.get('EntryDate');
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
    get CanReadOrderKind() {
        return this.canRead('OrderKind');
    }
    get CanWriteOrderKind() {
        return this.canWrite('OrderKind');
    }
    get OrderKind() {
        return this.get('OrderKind');
    }
    set OrderKind(value) {
        this.set('OrderKind', value);
    }
    get CanReadTotalIncVat() {
        return this.canRead('TotalIncVat');
    }
    get TotalIncVat() {
        return this.get('TotalIncVat');
    }
    get CanReadTotalSurchargeCustomerCurrency() {
        return this.canRead('TotalSurchargeCustomerCurrency');
    }
    get TotalSurchargeCustomerCurrency() {
        return this.get('TotalSurchargeCustomerCurrency');
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
    get CanReadTotalFeeCustomerCurrency() {
        return this.canRead('TotalFeeCustomerCurrency');
    }
    get TotalFeeCustomerCurrency() {
        return this.get('TotalFeeCustomerCurrency');
    }
    get CanReadTotalShippingAndHandling() {
        return this.canRead('TotalShippingAndHandling');
    }
    get TotalShippingAndHandling() {
        return this.get('TotalShippingAndHandling');
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
    get CanReadOrderDate() {
        return this.canRead('OrderDate');
    }
    get CanWriteOrderDate() {
        return this.canWrite('OrderDate');
    }
    get OrderDate() {
        return this.get('OrderDate');
    }
    set OrderDate(value) {
        this.set('OrderDate', value);
    }
    get CanReadTotalExVatCustomerCurrency() {
        return this.canRead('TotalExVatCustomerCurrency');
    }
    get TotalExVatCustomerCurrency() {
        return this.get('TotalExVatCustomerCurrency');
    }
    get CanReadDeliveryDate() {
        return this.canRead('DeliveryDate');
    }
    get CanWriteDeliveryDate() {
        return this.canWrite('DeliveryDate');
    }
    get DeliveryDate() {
        return this.get('DeliveryDate');
    }
    set DeliveryDate(value) {
        this.set('DeliveryDate', value);
    }
    get CanReadTotalBasePrice() {
        return this.canRead('TotalBasePrice');
    }
    get TotalBasePrice() {
        return this.get('TotalBasePrice');
    }
    get CanReadTotalFee() {
        return this.canRead('TotalFee');
    }
    get TotalFee() {
        return this.get('TotalFee');
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
    get CanExecuteApprove() {
        return this.canExecute('Approve');
    }
    get Approve() {
        return new framework_1.Method(this, 'Approve');
    }
    get CanExecuteReject() {
        return this.canExecute('Reject');
    }
    get Reject() {
        return new framework_1.Method(this, 'Reject');
    }
    get CanExecuteHold() {
        return this.canExecute('Hold');
    }
    get Hold() {
        return new framework_1.Method(this, 'Hold');
    }
    get CanExecuteContinue() {
        return this.canExecute('Continue');
    }
    get Continue() {
        return new framework_1.Method(this, 'Continue');
    }
    get CanExecuteConfirm() {
        return this.canExecute('Confirm');
    }
    get Confirm() {
        return new framework_1.Method(this, 'Confirm');
    }
    get CanExecuteCancel() {
        return this.canExecute('Cancel');
    }
    get Cancel() {
        return new framework_1.Method(this, 'Cancel');
    }
    get CanExecuteComplete() {
        return this.canExecute('Complete');
    }
    get Complete() {
        return new framework_1.Method(this, 'Complete');
    }
}
exports.PurchaseOrder = PurchaseOrder;
//# sourceMappingURL=PurchaseOrder.g.js.map