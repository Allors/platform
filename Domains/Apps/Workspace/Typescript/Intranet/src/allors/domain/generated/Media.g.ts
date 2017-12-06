// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';
import { Deletable } from './Deletable.g';
import { MediaContent } from './MediaContent.g';
import { Singleton } from './Singleton.g';
import { Person } from './Person.g';
import { Catalogue } from './Catalogue.g';
import { Good } from './Good.g';
import { InternalOrganisation } from './InternalOrganisation.g';
import { OrganisationVersion } from './OrganisationVersion.g';
import { PersonVersion } from './PersonVersion.g';
import { Organisation } from './Organisation.g';
import { ProductCategory } from './ProductCategory.g';
import { Store } from './Store.g';
import { CommunicationEventVersion } from './CommunicationEventVersion.g';
import { CommunicationEvent } from './CommunicationEvent.g';
import { PartyVersion } from './PartyVersion.g';
import { Party } from './Party.g';

export class Media extends SessionObject implements UniquelyIdentifiable, Deletable {
    get CanReadRevision(): boolean {
        return this.canRead('Revision');
    }

    get Revision(): string {
        return this.get('Revision');
    }


    get CanReadMediaContent(): boolean {
        return this.canRead('MediaContent');
    }

    get CanWriteMediaContent(): boolean {
        return this.canWrite('MediaContent');
    }

    get MediaContent(): MediaContent {
        return this.get('MediaContent');
    }

    set MediaContent(value: MediaContent) {
        this.set('MediaContent', value);
    }

    get CanReadInData(): boolean {
        return this.canRead('InData');
    }

    get CanWriteInData(): boolean {
        return this.canWrite('InData');
    }

    get InData(): any {
        return this.get('InData');
    }

    set InData(value: any) {
        this.set('InData', value);
    }

    get CanReadInDataUri(): boolean {
        return this.canRead('InDataUri');
    }

    get CanWriteInDataUri(): boolean {
        return this.canWrite('InDataUri');
    }

    get InDataUri(): string {
        return this.get('InDataUri');
    }

    set InDataUri(value: string) {
        this.set('InDataUri', value);
    }

    get CanReadFileName(): boolean {
        return this.canRead('FileName');
    }

    get CanWriteFileName(): boolean {
        return this.canWrite('FileName');
    }

    get FileName(): string {
        return this.get('FileName');
    }

    set FileName(value: string) {
        this.set('FileName', value);
    }

    get CanReadType(): boolean {
        return this.canRead('Type');
    }

    get Type(): string {
        return this.get('Type');
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
