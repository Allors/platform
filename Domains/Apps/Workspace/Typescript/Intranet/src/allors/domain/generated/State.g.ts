// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { GeographicBoundary } from './GeographicBoundary.g';
import { GeoLocatable } from './GeoLocatable.g';
import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';

export class State extends SessionObject implements GeographicBoundary {
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
