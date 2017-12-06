// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { ContactMechanism } from './ContactMechanism.g';
import { Auditable } from './Auditable.g';
import { Deletable } from './Deletable.g';
import { GeoLocatable } from './GeoLocatable.g';
import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';
import { PostalBoundary } from './PostalBoundary.g';
import { PostalCode } from './PostalCode.g';
import { City } from './City.g';
import { Country } from './Country.g';
import { ContactMechanismType } from './ContactMechanismType.g';
import { User } from './User.g';
import { InternalOrganisation } from './InternalOrganisation.g';
import { LetterCorrespondence } from './LetterCorrespondence.g';
import { LetterCorrespondenceVersion } from './LetterCorrespondenceVersion.g';
import { SalesInvoiceVersion } from './SalesInvoiceVersion.g';
import { SalesOrderItemVersion } from './SalesOrderItemVersion.g';
import { SalesOrderVersion } from './SalesOrderVersion.g';
import { SalesInvoice } from './SalesInvoice.g';
import { SalesOrder } from './SalesOrder.g';
import { SalesOrderItem } from './SalesOrderItem.g';
import { PartyVersion } from './PartyVersion.g';
import { Party } from './Party.g';
import { ShipmentVersion } from './ShipmentVersion.g';
import { PartyContactMechanism } from './PartyContactMechanism.g';
import { CommunicationEventVersion } from './CommunicationEventVersion.g';
import { CommunicationEvent } from './CommunicationEvent.g';
import { QuoteVersion } from './QuoteVersion.g';
import { RequestVersion } from './RequestVersion.g';
import { Quote } from './Quote.g';
import { Request } from './Request.g';

export class PostalAddress extends SessionObject implements ContactMechanism, GeoLocatable {
    get CanReadAddress1(): boolean {
        return this.canRead('Address1');
    }

    get CanWriteAddress1(): boolean {
        return this.canWrite('Address1');
    }

    get Address1(): string {
        return this.get('Address1');
    }

    set Address1(value: string) {
        this.set('Address1', value);
    }

    get CanReadAddress2(): boolean {
        return this.canRead('Address2');
    }

    get CanWriteAddress2(): boolean {
        return this.canWrite('Address2');
    }

    get Address2(): string {
        return this.get('Address2');
    }

    set Address2(value: string) {
        this.set('Address2', value);
    }

    get CanReadAddress3(): boolean {
        return this.canRead('Address3');
    }

    get CanWriteAddress3(): boolean {
        return this.canWrite('Address3');
    }

    get Address3(): string {
        return this.get('Address3');
    }

    set Address3(value: string) {
        this.set('Address3', value);
    }

    get CanReadPostalBoundary(): boolean {
        return this.canRead('PostalBoundary');
    }

    get CanWritePostalBoundary(): boolean {
        return this.canWrite('PostalBoundary');
    }

    get PostalBoundary(): PostalBoundary {
        return this.get('PostalBoundary');
    }

    set PostalBoundary(value: PostalBoundary) {
        this.set('PostalBoundary', value);
    }

    get CanReadPostalCode(): boolean {
        return this.canRead('PostalCode');
    }

    get PostalCode(): PostalCode {
        return this.get('PostalCode');
    }


    get CanReadCity(): boolean {
        return this.canRead('City');
    }

    get City(): City {
        return this.get('City');
    }


    get CanReadCountry(): boolean {
        return this.canRead('Country');
    }

    get Country(): Country {
        return this.get('Country');
    }


    get CanReadDirections(): boolean {
        return this.canRead('Directions');
    }

    get CanWriteDirections(): boolean {
        return this.canWrite('Directions');
    }

    get Directions(): string {
        return this.get('Directions');
    }

    set Directions(value: string) {
        this.set('Directions', value);
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

    get CanReadContactMechanismType(): boolean {
        return this.canRead('ContactMechanismType');
    }

    get CanWriteContactMechanismType(): boolean {
        return this.canWrite('ContactMechanismType');
    }

    get ContactMechanismType(): ContactMechanismType {
        return this.get('ContactMechanismType');
    }

    set ContactMechanismType(value: ContactMechanismType) {
        this.set('ContactMechanismType', value);
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


    get CanExecuteDelete(): boolean {
        return this.canExecute('Delete');
    }

    get Delete(): Method {
        return new Method(this, 'Delete');
    }
}
