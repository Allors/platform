"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class VatRate extends framework_1.SessionObject {
    get CanReadVatCalculationMethod() {
        return this.canRead('VatCalculationMethod');
    }
    get CanWriteVatCalculationMethod() {
        return this.canWrite('VatCalculationMethod');
    }
    get VatCalculationMethod() {
        return this.get('VatCalculationMethod');
    }
    set VatCalculationMethod(value) {
        this.set('VatCalculationMethod', value);
    }
    get CanReadVatReturnBoxes() {
        return this.canRead('VatReturnBoxes');
    }
    get CanWriteVatReturnBoxes() {
        return this.canWrite('VatReturnBoxes');
    }
    get VatReturnBoxes() {
        return this.get('VatReturnBoxes');
    }
    AddVatReturnBox(value) {
        return this.add('VatReturnBoxes', value);
    }
    RemoveVatReturnBox(value) {
        return this.remove('VatReturnBoxes', value);
    }
    set VatReturnBoxes(value) {
        this.set('VatReturnBoxes', value);
    }
    get CanReadRate() {
        return this.canRead('Rate');
    }
    get CanWriteRate() {
        return this.canWrite('Rate');
    }
    get Rate() {
        return this.get('Rate');
    }
    set Rate(value) {
        this.set('Rate', value);
    }
    get CanReadVatPayableAccount() {
        return this.canRead('VatPayableAccount');
    }
    get CanWriteVatPayableAccount() {
        return this.canWrite('VatPayableAccount');
    }
    get VatPayableAccount() {
        return this.get('VatPayableAccount');
    }
    set VatPayableAccount(value) {
        this.set('VatPayableAccount', value);
    }
    get CanReadTaxAuthority() {
        return this.canRead('TaxAuthority');
    }
    get CanWriteTaxAuthority() {
        return this.canWrite('TaxAuthority');
    }
    get TaxAuthority() {
        return this.get('TaxAuthority');
    }
    set TaxAuthority(value) {
        this.set('TaxAuthority', value);
    }
    get CanReadVatRateUsage() {
        return this.canRead('VatRateUsage');
    }
    get CanWriteVatRateUsage() {
        return this.canWrite('VatRateUsage');
    }
    get VatRateUsage() {
        return this.get('VatRateUsage');
    }
    set VatRateUsage(value) {
        this.set('VatRateUsage', value);
    }
    get CanReadVatRatePurchaseKind() {
        return this.canRead('VatRatePurchaseKind');
    }
    get CanWriteVatRatePurchaseKind() {
        return this.canWrite('VatRatePurchaseKind');
    }
    get VatRatePurchaseKind() {
        return this.get('VatRatePurchaseKind');
    }
    set VatRatePurchaseKind(value) {
        this.set('VatRatePurchaseKind', value);
    }
    get CanReadVatTariff() {
        return this.canRead('VatTariff');
    }
    get CanWriteVatTariff() {
        return this.canWrite('VatTariff');
    }
    get VatTariff() {
        return this.get('VatTariff');
    }
    set VatTariff(value) {
        this.set('VatTariff', value);
    }
    get CanReadPaymentFrequency() {
        return this.canRead('PaymentFrequency');
    }
    get CanWritePaymentFrequency() {
        return this.canWrite('PaymentFrequency');
    }
    get PaymentFrequency() {
        return this.get('PaymentFrequency');
    }
    set PaymentFrequency(value) {
        this.set('PaymentFrequency', value);
    }
    get CanReadVatToPayAccount() {
        return this.canRead('VatToPayAccount');
    }
    get CanWriteVatToPayAccount() {
        return this.canWrite('VatToPayAccount');
    }
    get VatToPayAccount() {
        return this.get('VatToPayAccount');
    }
    set VatToPayAccount(value) {
        this.set('VatToPayAccount', value);
    }
    get CanReadEuSalesListType() {
        return this.canRead('EuSalesListType');
    }
    get CanWriteEuSalesListType() {
        return this.canWrite('EuSalesListType');
    }
    get EuSalesListType() {
        return this.get('EuSalesListType');
    }
    set EuSalesListType(value) {
        this.set('EuSalesListType', value);
    }
    get CanReadVatToReceiveAccount() {
        return this.canRead('VatToReceiveAccount');
    }
    get CanWriteVatToReceiveAccount() {
        return this.canWrite('VatToReceiveAccount');
    }
    get VatToReceiveAccount() {
        return this.get('VatToReceiveAccount');
    }
    set VatToReceiveAccount(value) {
        this.set('VatToReceiveAccount', value);
    }
    get CanReadVatReceivableAccount() {
        return this.canRead('VatReceivableAccount');
    }
    get CanWriteVatReceivableAccount() {
        return this.canWrite('VatReceivableAccount');
    }
    get VatReceivableAccount() {
        return this.get('VatReceivableAccount');
    }
    set VatReceivableAccount(value) {
        this.set('VatReceivableAccount', value);
    }
    get CanReadReverseCharge() {
        return this.canRead('ReverseCharge');
    }
    get CanWriteReverseCharge() {
        return this.canWrite('ReverseCharge');
    }
    get ReverseCharge() {
        return this.get('ReverseCharge');
    }
    set ReverseCharge(value) {
        this.set('ReverseCharge', value);
    }
}
exports.VatRate = VatRate;
//# sourceMappingURL=VatRate.g.js.map