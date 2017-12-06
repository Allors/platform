// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { InventoryItem } from './InventoryItem.g';
import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';
import { SerialisedInventoryItemState } from './SerialisedInventoryItemState.g';
import { SerialisedInventoryItemVersion } from './SerialisedInventoryItemVersion.g';
import { Ownership } from './Ownership.g';
import { ProductCharacteristicValue } from './ProductCharacteristicValue.g';
import { InventoryItemVariance } from './InventoryItemVariance.g';
import { Part } from './Part.g';
import { Lot } from './Lot.g';
import { UnitOfMeasure } from './UnitOfMeasure.g';
import { Good } from './Good.g';
import { ProductType } from './ProductType.g';
import { Facility } from './Facility.g';
import { WorkEffortVersion } from './WorkEffortVersion.g';
import { WorkEffort } from './WorkEffort.g';

export class SerialisedInventoryItem extends SessionObject implements InventoryItem {
    get CanReadSerialisedInventoryItemState(): boolean {
        return this.canRead('SerialisedInventoryItemState');
    }

    get CanWriteSerialisedInventoryItemState(): boolean {
        return this.canWrite('SerialisedInventoryItemState');
    }

    get SerialisedInventoryItemState(): SerialisedInventoryItemState {
        return this.get('SerialisedInventoryItemState');
    }

    set SerialisedInventoryItemState(value: SerialisedInventoryItemState) {
        this.set('SerialisedInventoryItemState', value);
    }

    get CanReadCurrentVersion(): boolean {
        return this.canRead('CurrentVersion');
    }

    get CanWriteCurrentVersion(): boolean {
        return this.canWrite('CurrentVersion');
    }

    get CurrentVersion(): SerialisedInventoryItemVersion {
        return this.get('CurrentVersion');
    }

    set CurrentVersion(value: SerialisedInventoryItemVersion) {
        this.set('CurrentVersion', value);
    }

    get CanReadAllVersions(): boolean {
        return this.canRead('AllVersions');
    }

    get CanWriteAllVersions(): boolean {
        return this.canWrite('AllVersions');
    }

    get AllVersions(): SerialisedInventoryItemVersion[] {
        return this.get('AllVersions');
    }

    AddAllVersion(value: SerialisedInventoryItemVersion) {
        return this.add('AllVersions', value);
    }

    RemoveAllVersion(value: SerialisedInventoryItemVersion) {
        return this.remove('AllVersions', value);
    }

    set AllVersions(value: SerialisedInventoryItemVersion[]) {
        this.set('AllVersions', value);
    }

    get CanReadSerialNumber(): boolean {
        return this.canRead('SerialNumber');
    }

    get CanWriteSerialNumber(): boolean {
        return this.canWrite('SerialNumber');
    }

    get SerialNumber(): string {
        return this.get('SerialNumber');
    }

    set SerialNumber(value: string) {
        this.set('SerialNumber', value);
    }

    get CanReadOwnership(): boolean {
        return this.canRead('Ownership');
    }

    get CanWriteOwnership(): boolean {
        return this.canWrite('Ownership');
    }

    get Ownership(): Ownership {
        return this.get('Ownership');
    }

    set Ownership(value: Ownership) {
        this.set('Ownership', value);
    }

    get CanReadOwner(): boolean {
        return this.canRead('Owner');
    }

    get CanWriteOwner(): boolean {
        return this.canWrite('Owner');
    }

    get Owner(): string {
        return this.get('Owner');
    }

    set Owner(value: string) {
        this.set('Owner', value);
    }

    get CanReadAcquisitionYear(): boolean {
        return this.canRead('AcquisitionYear');
    }

    get CanWriteAcquisitionYear(): boolean {
        return this.canWrite('AcquisitionYear');
    }

    get AcquisitionYear(): number {
        return this.get('AcquisitionYear');
    }

    set AcquisitionYear(value: number) {
        this.set('AcquisitionYear', value);
    }

    get CanReadManufacturingYear(): boolean {
        return this.canRead('ManufacturingYear');
    }

    get CanWriteManufacturingYear(): boolean {
        return this.canWrite('ManufacturingYear');
    }

    get ManufacturingYear(): number {
        return this.get('ManufacturingYear');
    }

    set ManufacturingYear(value: number) {
        this.set('ManufacturingYear', value);
    }

    get CanReadReplacementValue(): boolean {
        return this.canRead('ReplacementValue');
    }

    get CanWriteReplacementValue(): boolean {
        return this.canWrite('ReplacementValue');
    }

    get ReplacementValue(): number {
        return this.get('ReplacementValue');
    }

    set ReplacementValue(value: number) {
        this.set('ReplacementValue', value);
    }

    get CanReadLifeTime(): boolean {
        return this.canRead('LifeTime');
    }

    get CanWriteLifeTime(): boolean {
        return this.canWrite('LifeTime');
    }

    get LifeTime(): number {
        return this.get('LifeTime');
    }

    set LifeTime(value: number) {
        this.set('LifeTime', value);
    }

    get CanReadDepreciationYears(): boolean {
        return this.canRead('DepreciationYears');
    }

    get CanWriteDepreciationYears(): boolean {
        return this.canWrite('DepreciationYears');
    }

    get DepreciationYears(): number {
        return this.get('DepreciationYears');
    }

    set DepreciationYears(value: number) {
        this.set('DepreciationYears', value);
    }

    get CanReadPurchasePrice(): boolean {
        return this.canRead('PurchasePrice');
    }

    get CanWritePurchasePrice(): boolean {
        return this.canWrite('PurchasePrice');
    }

    get PurchasePrice(): number {
        return this.get('PurchasePrice');
    }

    set PurchasePrice(value: number) {
        this.set('PurchasePrice', value);
    }

    get CanReadExpectedSalesPrice(): boolean {
        return this.canRead('ExpectedSalesPrice');
    }

    get CanWriteExpectedSalesPrice(): boolean {
        return this.canWrite('ExpectedSalesPrice');
    }

    get ExpectedSalesPrice(): number {
        return this.get('ExpectedSalesPrice');
    }

    set ExpectedSalesPrice(value: number) {
        this.set('ExpectedSalesPrice', value);
    }

    get CanReadRefurbishCost(): boolean {
        return this.canRead('RefurbishCost');
    }

    get CanWriteRefurbishCost(): boolean {
        return this.canWrite('RefurbishCost');
    }

    get RefurbishCost(): number {
        return this.get('RefurbishCost');
    }

    set RefurbishCost(value: number) {
        this.set('RefurbishCost', value);
    }

    get CanReadTransportCost(): boolean {
        return this.canRead('TransportCost');
    }

    get CanWriteTransportCost(): boolean {
        return this.canWrite('TransportCost');
    }

    get TransportCost(): number {
        return this.get('TransportCost');
    }

    set TransportCost(value: number) {
        this.set('TransportCost', value);
    }

    get CanReadProductCharacteristicValues(): boolean {
        return this.canRead('ProductCharacteristicValues');
    }

    get CanWriteProductCharacteristicValues(): boolean {
        return this.canWrite('ProductCharacteristicValues');
    }

    get ProductCharacteristicValues(): ProductCharacteristicValue[] {
        return this.get('ProductCharacteristicValues');
    }

    AddProductCharacteristicValue(value: ProductCharacteristicValue) {
        return this.add('ProductCharacteristicValues', value);
    }

    RemoveProductCharacteristicValue(value: ProductCharacteristicValue) {
        return this.remove('ProductCharacteristicValues', value);
    }

    set ProductCharacteristicValues(value: ProductCharacteristicValue[]) {
        this.set('ProductCharacteristicValues', value);
    }

    get CanReadInventoryItemVariances(): boolean {
        return this.canRead('InventoryItemVariances');
    }

    get CanWriteInventoryItemVariances(): boolean {
        return this.canWrite('InventoryItemVariances');
    }

    get InventoryItemVariances(): InventoryItemVariance[] {
        return this.get('InventoryItemVariances');
    }

    AddInventoryItemVariance(value: InventoryItemVariance) {
        return this.add('InventoryItemVariances', value);
    }

    RemoveInventoryItemVariance(value: InventoryItemVariance) {
        return this.remove('InventoryItemVariances', value);
    }

    set InventoryItemVariances(value: InventoryItemVariance[]) {
        this.set('InventoryItemVariances', value);
    }

    get CanReadPart(): boolean {
        return this.canRead('Part');
    }

    get CanWritePart(): boolean {
        return this.canWrite('Part');
    }

    get Part(): Part {
        return this.get('Part');
    }

    set Part(value: Part) {
        this.set('Part', value);
    }

    get CanReadName(): boolean {
        return this.canRead('Name');
    }

    get Name(): string {
        return this.get('Name');
    }


    get CanReadLot(): boolean {
        return this.canRead('Lot');
    }

    get CanWriteLot(): boolean {
        return this.canWrite('Lot');
    }

    get Lot(): Lot {
        return this.get('Lot');
    }

    set Lot(value: Lot) {
        this.set('Lot', value);
    }

    get CanReadSku(): boolean {
        return this.canRead('Sku');
    }

    get Sku(): string {
        return this.get('Sku');
    }


    get CanReadUnitOfMeasure(): boolean {
        return this.canRead('UnitOfMeasure');
    }

    get UnitOfMeasure(): UnitOfMeasure {
        return this.get('UnitOfMeasure');
    }


    get CanReadGood(): boolean {
        return this.canRead('Good');
    }

    get CanWriteGood(): boolean {
        return this.canWrite('Good');
    }

    get Good(): Good {
        return this.get('Good');
    }

    set Good(value: Good) {
        this.set('Good', value);
    }

    get CanReadProductType(): boolean {
        return this.canRead('ProductType');
    }

    get CanWriteProductType(): boolean {
        return this.canWrite('ProductType');
    }

    get ProductType(): ProductType {
        return this.get('ProductType');
    }

    set ProductType(value: ProductType) {
        this.set('ProductType', value);
    }

    get CanReadFacility(): boolean {
        return this.canRead('Facility');
    }

    get CanWriteFacility(): boolean {
        return this.canWrite('Facility');
    }

    get Facility(): Facility {
        return this.get('Facility');
    }

    set Facility(value: Facility) {
        this.set('Facility', value);
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


}
