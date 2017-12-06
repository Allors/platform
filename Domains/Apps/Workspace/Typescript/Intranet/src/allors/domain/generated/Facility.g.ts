// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { GeoLocatable } from './GeoLocatable.g';
import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';
import { FacilityType } from './FacilityType.g';
import { InternalOrganisation } from './InternalOrganisation.g';
import { PurchaseShipmentVersion } from './PurchaseShipmentVersion.g';
import { RequirementVersion } from './RequirementVersion.g';
import { PurchaseShipment } from './PurchaseShipment.g';
import { Requirement } from './Requirement.g';
import { Store } from './Store.g';
import { InventoryItemVersion } from './InventoryItemVersion.g';
import { InventoryItem } from './InventoryItem.g';
import { WorkEffortVersion } from './WorkEffortVersion.g';
import { WorkEffort } from './WorkEffort.g';

export class Facility extends SessionObject implements GeoLocatable {
    get CanReadFacilityType(): boolean {
        return this.canRead('FacilityType');
    }

    get CanWriteFacilityType(): boolean {
        return this.canWrite('FacilityType');
    }

    get FacilityType(): FacilityType {
        return this.get('FacilityType');
    }

    set FacilityType(value: FacilityType) {
        this.set('FacilityType', value);
    }

    get CanReadLatitude(): boolean {
        return this.canRead('Latitude');
    }

    get Latitude(): number {
        return this.get('Latitude');
    }


    get CanReadLongitude(): boolean {
        return this.canRead('Longitude');
    }

    get Longitude(): number {
        return this.get('Longitude');
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
