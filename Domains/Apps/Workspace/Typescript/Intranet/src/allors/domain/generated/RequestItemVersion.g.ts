// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { Version } from './Version.g';
import { RequestItemState } from './RequestItemState.g';
import { UnitOfMeasure } from './UnitOfMeasure.g';
import { Requirement } from './Requirement.g';
import { Deliverable } from './Deliverable.g';
import { ProductFeature } from './ProductFeature.g';
import { NeededSkill } from './NeededSkill.g';
import { Product } from './Product.g';
import { RequestItem } from './RequestItem.g';

export class RequestItemVersion extends SessionObject implements Version {
    get CanReadRequestItemState(): boolean {
        return this.canRead('RequestItemState');
    }

    get RequestItemState(): RequestItemState {
        return this.get('RequestItemState');
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

    get CanReadQuantity(): boolean {
        return this.canRead('Quantity');
    }

    get CanWriteQuantity(): boolean {
        return this.canWrite('Quantity');
    }

    get Quantity(): number {
        return this.get('Quantity');
    }

    set Quantity(value: number) {
        this.set('Quantity', value);
    }

    get CanReadUnitOfMeasure(): boolean {
        return this.canRead('UnitOfMeasure');
    }

    get CanWriteUnitOfMeasure(): boolean {
        return this.canWrite('UnitOfMeasure');
    }

    get UnitOfMeasure(): UnitOfMeasure {
        return this.get('UnitOfMeasure');
    }

    set UnitOfMeasure(value: UnitOfMeasure) {
        this.set('UnitOfMeasure', value);
    }

    get CanReadRequirements(): boolean {
        return this.canRead('Requirements');
    }

    get CanWriteRequirements(): boolean {
        return this.canWrite('Requirements');
    }

    get Requirements(): Requirement[] {
        return this.get('Requirements');
    }

    AddRequirement(value: Requirement) {
        return this.add('Requirements', value);
    }

    RemoveRequirement(value: Requirement) {
        return this.remove('Requirements', value);
    }

    set Requirements(value: Requirement[]) {
        this.set('Requirements', value);
    }

    get CanReadDeliverable(): boolean {
        return this.canRead('Deliverable');
    }

    get CanWriteDeliverable(): boolean {
        return this.canWrite('Deliverable');
    }

    get Deliverable(): Deliverable {
        return this.get('Deliverable');
    }

    set Deliverable(value: Deliverable) {
        this.set('Deliverable', value);
    }

    get CanReadProductFeature(): boolean {
        return this.canRead('ProductFeature');
    }

    get CanWriteProductFeature(): boolean {
        return this.canWrite('ProductFeature');
    }

    get ProductFeature(): ProductFeature {
        return this.get('ProductFeature');
    }

    set ProductFeature(value: ProductFeature) {
        this.set('ProductFeature', value);
    }

    get CanReadNeededSkill(): boolean {
        return this.canRead('NeededSkill');
    }

    get CanWriteNeededSkill(): boolean {
        return this.canWrite('NeededSkill');
    }

    get NeededSkill(): NeededSkill {
        return this.get('NeededSkill');
    }

    set NeededSkill(value: NeededSkill) {
        this.set('NeededSkill', value);
    }

    get CanReadProduct(): boolean {
        return this.canRead('Product');
    }

    get CanWriteProduct(): boolean {
        return this.canWrite('Product');
    }

    get Product(): Product {
        return this.get('Product');
    }

    set Product(value: Product) {
        this.set('Product', value);
    }

    get CanReadMaximumAllowedPrice(): boolean {
        return this.canRead('MaximumAllowedPrice');
    }

    get CanWriteMaximumAllowedPrice(): boolean {
        return this.canWrite('MaximumAllowedPrice');
    }

    get MaximumAllowedPrice(): number {
        return this.get('MaximumAllowedPrice');
    }

    set MaximumAllowedPrice(value: number) {
        this.set('MaximumAllowedPrice', value);
    }

    get CanReadRequiredByDate(): boolean {
        return this.canRead('RequiredByDate');
    }

    get CanWriteRequiredByDate(): boolean {
        return this.canWrite('RequiredByDate');
    }

    get RequiredByDate(): Date {
        return this.get('RequiredByDate');
    }

    set RequiredByDate(value: Date) {
        this.set('RequiredByDate', value);
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
