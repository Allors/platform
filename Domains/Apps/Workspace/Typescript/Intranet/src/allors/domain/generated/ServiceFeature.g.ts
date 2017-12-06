// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { Enumeration } from './Enumeration.g';
import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';
import { ProductFeature } from './ProductFeature.g';
import { LocalisedText } from './LocalisedText.g';
import { EstimatedProductCost } from './EstimatedProductCost.g';
import { PriceComponent } from './PriceComponent.g';
import { VatRate } from './VatRate.g';
import { QuoteItemVersion } from './QuoteItemVersion.g';
import { RequestItemVersion } from './RequestItemVersion.g';
import { SalesInvoiceItemVersion } from './SalesInvoiceItemVersion.g';
import { SalesOrderItemVersion } from './SalesOrderItemVersion.g';
import { QuoteItem } from './QuoteItem.g';
import { RequestItem } from './RequestItem.g';
import { SalesInvoiceItem } from './SalesInvoiceItem.g';
import { SalesOrderItem } from './SalesOrderItem.g';
import { Product } from './Product.g';

export class ServiceFeature extends SessionObject implements Enumeration, ProductFeature {
    get CanReadLocalisedNames(): boolean {
        return this.canRead('LocalisedNames');
    }

    get CanWriteLocalisedNames(): boolean {
        return this.canWrite('LocalisedNames');
    }

    get LocalisedNames(): LocalisedText[] {
        return this.get('LocalisedNames');
    }

    AddLocalisedName(value: LocalisedText) {
        return this.add('LocalisedNames', value);
    }

    RemoveLocalisedName(value: LocalisedText) {
        return this.remove('LocalisedNames', value);
    }

    set LocalisedNames(value: LocalisedText[]) {
        this.set('LocalisedNames', value);
    }

    get CanReadName(): boolean {
        return this.canRead('Name');
    }

    get CanWriteName(): boolean {
        return this.canWrite('Name');
    }

    get Name(): string {
        return this.get('Name');
    }

    set Name(value: string) {
        this.set('Name', value);
    }

    get CanReadIsActive(): boolean {
        return this.canRead('IsActive');
    }

    get CanWriteIsActive(): boolean {
        return this.canWrite('IsActive');
    }

    get IsActive(): boolean {
        return this.get('IsActive');
    }

    set IsActive(value: boolean) {
        this.set('IsActive', value);
    }

    get CanReadUniqueId(): boolean {
        return this.canRead('UniqueId');
    }

    get CanWriteUniqueId(): boolean {
        return this.canWrite('UniqueId');
    }

    get UniqueId(): string {
        return this.get('UniqueId');
    }

    set UniqueId(value: string) {
        this.set('UniqueId', value);
    }

    get CanReadEstimatedProductCosts(): boolean {
        return this.canRead('EstimatedProductCosts');
    }

    get CanWriteEstimatedProductCosts(): boolean {
        return this.canWrite('EstimatedProductCosts');
    }

    get EstimatedProductCosts(): EstimatedProductCost[] {
        return this.get('EstimatedProductCosts');
    }

    AddEstimatedProductCost(value: EstimatedProductCost) {
        return this.add('EstimatedProductCosts', value);
    }

    RemoveEstimatedProductCost(value: EstimatedProductCost) {
        return this.remove('EstimatedProductCosts', value);
    }

    set EstimatedProductCosts(value: EstimatedProductCost[]) {
        this.set('EstimatedProductCosts', value);
    }

    get CanReadBasePrices(): boolean {
        return this.canRead('BasePrices');
    }

    get BasePrices(): PriceComponent[] {
        return this.get('BasePrices');
    }


    get CanReadDescription(): boolean {
        return this.canRead('Description');
    }

    get CanWriteDescription(): boolean {
        return this.canWrite('Description');
    }

    get Description(): string {
        return this.get('Description');
    }

    set Description(value: string) {
        this.set('Description', value);
    }

    get CanReadDependentFeatures(): boolean {
        return this.canRead('DependentFeatures');
    }

    get CanWriteDependentFeatures(): boolean {
        return this.canWrite('DependentFeatures');
    }

    get DependentFeatures(): ProductFeature[] {
        return this.get('DependentFeatures');
    }

    AddDependentFeature(value: ProductFeature) {
        return this.add('DependentFeatures', value);
    }

    RemoveDependentFeature(value: ProductFeature) {
        return this.remove('DependentFeatures', value);
    }

    set DependentFeatures(value: ProductFeature[]) {
        this.set('DependentFeatures', value);
    }

    get CanReadIncompatibleFeatures(): boolean {
        return this.canRead('IncompatibleFeatures');
    }

    get CanWriteIncompatibleFeatures(): boolean {
        return this.canWrite('IncompatibleFeatures');
    }

    get IncompatibleFeatures(): ProductFeature[] {
        return this.get('IncompatibleFeatures');
    }

    AddIncompatibleFeature(value: ProductFeature) {
        return this.add('IncompatibleFeatures', value);
    }

    RemoveIncompatibleFeature(value: ProductFeature) {
        return this.remove('IncompatibleFeatures', value);
    }

    set IncompatibleFeatures(value: ProductFeature[]) {
        this.set('IncompatibleFeatures', value);
    }

    get CanReadVatRate(): boolean {
        return this.canRead('VatRate');
    }

    get CanWriteVatRate(): boolean {
        return this.canWrite('VatRate');
    }

    get VatRate(): VatRate {
        return this.get('VatRate');
    }

    set VatRate(value: VatRate) {
        this.set('VatRate', value);
    }


    get CanExecuteDelete(): boolean {
        return this.canExecute('Delete');
    }

    get Delete(): Method {
        return new Method(this, 'Delete');
    }
}
