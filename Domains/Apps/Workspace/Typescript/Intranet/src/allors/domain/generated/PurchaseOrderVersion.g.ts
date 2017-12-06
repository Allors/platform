// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { OrderVersion } from './OrderVersion.g';
import { Version } from './Version.g';
import { User } from './User.g';
import { Currency } from './Currency.g';
import { Fee } from './Fee.g';
import { OrderTerm } from './OrderTerm.g';
import { OrderItem } from './OrderItem.g';
import { DiscountAdjustment } from './DiscountAdjustment.g';
import { OrderKind } from './OrderKind.g';
import { VatRegime } from './VatRegime.g';
import { ShippingAndHandlingCharge } from './ShippingAndHandlingCharge.g';
import { SurchargeAdjustment } from './SurchargeAdjustment.g';
import { PurchaseOrder } from './PurchaseOrder.g';

export class PurchaseOrderVersion extends SessionObject implements OrderVersion {
    get CanReadComment(): boolean {
        return this.canRead('Comment');
    }

    get CanWriteComment(): boolean {
        return this.canWrite('Comment');
    }

    get Comment(): string {
        return this.get('Comment');
    }

    set Comment(value: string) {
        this.set('Comment', value);
    }

    get CanReadCreatedBy(): boolean {
        return this.canRead('CreatedBy');
    }

    get CanWriteCreatedBy(): boolean {
        return this.canWrite('CreatedBy');
    }

    get CreatedBy(): User {
        return this.get('CreatedBy');
    }

    set CreatedBy(value: User) {
        this.set('CreatedBy', value);
    }

    get CanReadLastModifiedBy(): boolean {
        return this.canRead('LastModifiedBy');
    }

    get CanWriteLastModifiedBy(): boolean {
        return this.canWrite('LastModifiedBy');
    }

    get LastModifiedBy(): User {
        return this.get('LastModifiedBy');
    }

    set LastModifiedBy(value: User) {
        this.set('LastModifiedBy', value);
    }

    get CanReadCreationDate(): boolean {
        return this.canRead('CreationDate');
    }

    get CanWriteCreationDate(): boolean {
        return this.canWrite('CreationDate');
    }

    get CreationDate(): Date {
        return this.get('CreationDate');
    }

    set CreationDate(value: Date) {
        this.set('CreationDate', value);
    }

    get CanReadLastModifiedDate(): boolean {
        return this.canRead('LastModifiedDate');
    }

    get CanWriteLastModifiedDate(): boolean {
        return this.canWrite('LastModifiedDate');
    }

    get LastModifiedDate(): Date {
        return this.get('LastModifiedDate');
    }

    set LastModifiedDate(value: Date) {
        this.set('LastModifiedDate', value);
    }

    get CanReadInternalComment(): boolean {
        return this.canRead('InternalComment');
    }

    get CanWriteInternalComment(): boolean {
        return this.canWrite('InternalComment');
    }

    get InternalComment(): string {
        return this.get('InternalComment');
    }

    set InternalComment(value: string) {
        this.set('InternalComment', value);
    }

    get CanReadCustomerCurrency(): boolean {
        return this.canRead('CustomerCurrency');
    }

    get CustomerCurrency(): Currency {
        return this.get('CustomerCurrency');
    }


    get CanReadTotalBasePriceCustomerCurrency(): boolean {
        return this.canRead('TotalBasePriceCustomerCurrency');
    }

    get TotalBasePriceCustomerCurrency(): number {
        return this.get('TotalBasePriceCustomerCurrency');
    }


    get CanReadTotalIncVatCustomerCurrency(): boolean {
        return this.canRead('TotalIncVatCustomerCurrency');
    }

    get TotalIncVatCustomerCurrency(): number {
        return this.get('TotalIncVatCustomerCurrency');
    }


    get CanReadTotalDiscountCustomerCurrency(): boolean {
        return this.canRead('TotalDiscountCustomerCurrency');
    }

    get TotalDiscountCustomerCurrency(): number {
        return this.get('TotalDiscountCustomerCurrency');
    }


    get CanReadCustomerReference(): boolean {
        return this.canRead('CustomerReference');
    }

    get CanWriteCustomerReference(): boolean {
        return this.canWrite('CustomerReference');
    }

    get CustomerReference(): string {
        return this.get('CustomerReference');
    }

    set CustomerReference(value: string) {
        this.set('CustomerReference', value);
    }

    get CanReadFee(): boolean {
        return this.canRead('Fee');
    }

    get CanWriteFee(): boolean {
        return this.canWrite('Fee');
    }

    get Fee(): Fee {
        return this.get('Fee');
    }

    set Fee(value: Fee) {
        this.set('Fee', value);
    }

    get CanReadTotalExVat(): boolean {
        return this.canRead('TotalExVat');
    }

    get TotalExVat(): number {
        return this.get('TotalExVat');
    }


    get CanReadOrderTerms(): boolean {
        return this.canRead('OrderTerms');
    }

    get CanWriteOrderTerms(): boolean {
        return this.canWrite('OrderTerms');
    }

    get OrderTerms(): OrderTerm[] {
        return this.get('OrderTerms');
    }

    AddOrderTerm(value: OrderTerm) {
        return this.add('OrderTerms', value);
    }

    RemoveOrderTerm(value: OrderTerm) {
        return this.remove('OrderTerms', value);
    }

    set OrderTerms(value: OrderTerm[]) {
        this.set('OrderTerms', value);
    }

    get CanReadTotalVat(): boolean {
        return this.canRead('TotalVat');
    }

    get TotalVat(): number {
        return this.get('TotalVat');
    }


    get CanReadTotalSurcharge(): boolean {
        return this.canRead('TotalSurcharge');
    }

    get TotalSurcharge(): number {
        return this.get('TotalSurcharge');
    }


    get CanReadValidOrderItems(): boolean {
        return this.canRead('ValidOrderItems');
    }

    get ValidOrderItems(): OrderItem[] {
        return this.get('ValidOrderItems');
    }


    get CanReadOrderNumber(): boolean {
        return this.canRead('OrderNumber');
    }

    get OrderNumber(): string {
        return this.get('OrderNumber');
    }


    get CanReadTotalVatCustomerCurrency(): boolean {
        return this.canRead('TotalVatCustomerCurrency');
    }

    get TotalVatCustomerCurrency(): number {
        return this.get('TotalVatCustomerCurrency');
    }


    get CanReadTotalDiscount(): boolean {
        return this.canRead('TotalDiscount');
    }

    get TotalDiscount(): number {
        return this.get('TotalDiscount');
    }


    get CanReadMessage(): boolean {
        return this.canRead('Message');
    }

    get CanWriteMessage(): boolean {
        return this.canWrite('Message');
    }

    get Message(): string {
        return this.get('Message');
    }

    set Message(value: string) {
        this.set('Message', value);
    }

    get CanReadTotalShippingAndHandlingCustomerCurrency(): boolean {
        return this.canRead('TotalShippingAndHandlingCustomerCurrency');
    }

    get TotalShippingAndHandlingCustomerCurrency(): number {
        return this.get('TotalShippingAndHandlingCustomerCurrency');
    }


    get CanReadEntryDate(): boolean {
        return this.canRead('EntryDate');
    }

    get EntryDate(): Date {
        return this.get('EntryDate');
    }


    get CanReadDiscountAdjustment(): boolean {
        return this.canRead('DiscountAdjustment');
    }

    get CanWriteDiscountAdjustment(): boolean {
        return this.canWrite('DiscountAdjustment');
    }

    get DiscountAdjustment(): DiscountAdjustment {
        return this.get('DiscountAdjustment');
    }

    set DiscountAdjustment(value: DiscountAdjustment) {
        this.set('DiscountAdjustment', value);
    }

    get CanReadOrderKind(): boolean {
        return this.canRead('OrderKind');
    }

    get CanWriteOrderKind(): boolean {
        return this.canWrite('OrderKind');
    }

    get OrderKind(): OrderKind {
        return this.get('OrderKind');
    }

    set OrderKind(value: OrderKind) {
        this.set('OrderKind', value);
    }

    get CanReadTotalIncVat(): boolean {
        return this.canRead('TotalIncVat');
    }

    get TotalIncVat(): number {
        return this.get('TotalIncVat');
    }


    get CanReadTotalSurchargeCustomerCurrency(): boolean {
        return this.canRead('TotalSurchargeCustomerCurrency');
    }

    get TotalSurchargeCustomerCurrency(): number {
        return this.get('TotalSurchargeCustomerCurrency');
    }


    get CanReadVatRegime(): boolean {
        return this.canRead('VatRegime');
    }

    get CanWriteVatRegime(): boolean {
        return this.canWrite('VatRegime');
    }

    get VatRegime(): VatRegime {
        return this.get('VatRegime');
    }

    set VatRegime(value: VatRegime) {
        this.set('VatRegime', value);
    }

    get CanReadTotalFeeCustomerCurrency(): boolean {
        return this.canRead('TotalFeeCustomerCurrency');
    }

    get TotalFeeCustomerCurrency(): number {
        return this.get('TotalFeeCustomerCurrency');
    }


    get CanReadTotalShippingAndHandling(): boolean {
        return this.canRead('TotalShippingAndHandling');
    }

    get TotalShippingAndHandling(): number {
        return this.get('TotalShippingAndHandling');
    }


    get CanReadShippingAndHandlingCharge(): boolean {
        return this.canRead('ShippingAndHandlingCharge');
    }

    get CanWriteShippingAndHandlingCharge(): boolean {
        return this.canWrite('ShippingAndHandlingCharge');
    }

    get ShippingAndHandlingCharge(): ShippingAndHandlingCharge {
        return this.get('ShippingAndHandlingCharge');
    }

    set ShippingAndHandlingCharge(value: ShippingAndHandlingCharge) {
        this.set('ShippingAndHandlingCharge', value);
    }

    get CanReadOrderDate(): boolean {
        return this.canRead('OrderDate');
    }

    get CanWriteOrderDate(): boolean {
        return this.canWrite('OrderDate');
    }

    get OrderDate(): Date {
        return this.get('OrderDate');
    }

    set OrderDate(value: Date) {
        this.set('OrderDate', value);
    }

    get CanReadTotalExVatCustomerCurrency(): boolean {
        return this.canRead('TotalExVatCustomerCurrency');
    }

    get TotalExVatCustomerCurrency(): number {
        return this.get('TotalExVatCustomerCurrency');
    }


    get CanReadDeliveryDate(): boolean {
        return this.canRead('DeliveryDate');
    }

    get CanWriteDeliveryDate(): boolean {
        return this.canWrite('DeliveryDate');
    }

    get DeliveryDate(): Date {
        return this.get('DeliveryDate');
    }

    set DeliveryDate(value: Date) {
        this.set('DeliveryDate', value);
    }

    get CanReadTotalBasePrice(): boolean {
        return this.canRead('TotalBasePrice');
    }

    get TotalBasePrice(): number {
        return this.get('TotalBasePrice');
    }


    get CanReadTotalFee(): boolean {
        return this.canRead('TotalFee');
    }

    get TotalFee(): number {
        return this.get('TotalFee');
    }


    get CanReadSurchargeAdjustment(): boolean {
        return this.canRead('SurchargeAdjustment');
    }

    get CanWriteSurchargeAdjustment(): boolean {
        return this.canWrite('SurchargeAdjustment');
    }

    get SurchargeAdjustment(): SurchargeAdjustment {
        return this.get('SurchargeAdjustment');
    }

    set SurchargeAdjustment(value: SurchargeAdjustment) {
        this.set('SurchargeAdjustment', value);
    }

    get CanReadDerivationTimeStamp(): boolean {
        return this.canRead('DerivationTimeStamp');
    }

    get CanWriteDerivationTimeStamp(): boolean {
        return this.canWrite('DerivationTimeStamp');
    }

    get DerivationTimeStamp(): Date {
        return this.get('DerivationTimeStamp');
    }

    set DerivationTimeStamp(value: Date) {
        this.set('DerivationTimeStamp', value);
    }


}
