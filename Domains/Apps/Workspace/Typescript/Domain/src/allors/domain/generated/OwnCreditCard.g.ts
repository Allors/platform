// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { PaymentMethod } from './PaymentMethod.g';
import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';
import { CustomerShipmentVersion } from './CustomerShipmentVersion.g';
import { InternalOrganisation } from './InternalOrganisation.g';
import { SalesInvoiceVersion } from './SalesInvoiceVersion.g';
import { SalesOrderVersion } from './SalesOrderVersion.g';
import { SalesInvoice } from './SalesInvoice.g';
import { SalesOrder } from './SalesOrder.g';
import { Store } from './Store.g';
import { PartyVersion } from './PartyVersion.g';
import { Party } from './Party.g';

export class OwnCreditCard extends SessionObject implements PaymentMethod {
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
