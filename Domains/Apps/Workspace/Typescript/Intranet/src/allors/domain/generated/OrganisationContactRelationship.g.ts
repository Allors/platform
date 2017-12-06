// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { PartyRelationship } from './PartyRelationship.g';
import { Period } from './Period.g';
import { Deletable } from './Deletable.g';
import { Person } from './Person.g';
import { Organisation } from './Organisation.g';
import { OrganisationContactKind } from './OrganisationContactKind.g';
import { Party } from './Party.g';
import { PartyVersion } from './PartyVersion.g';

export class OrganisationContactRelationship extends SessionObject implements PartyRelationship {
    get CanReadContact(): boolean {
        return this.canRead('Contact');
    }

    get CanWriteContact(): boolean {
        return this.canWrite('Contact');
    }

    get Contact(): Person {
        return this.get('Contact');
    }

    set Contact(value: Person) {
        this.set('Contact', value);
    }

    get CanReadOrganisation(): boolean {
        return this.canRead('Organisation');
    }

    get CanWriteOrganisation(): boolean {
        return this.canWrite('Organisation');
    }

    get Organisation(): Organisation {
        return this.get('Organisation');
    }

    set Organisation(value: Organisation) {
        this.set('Organisation', value);
    }

    get CanReadContactKinds(): boolean {
        return this.canRead('ContactKinds');
    }

    get CanWriteContactKinds(): boolean {
        return this.canWrite('ContactKinds');
    }

    get ContactKinds(): OrganisationContactKind[] {
        return this.get('ContactKinds');
    }

    AddContactKind(value: OrganisationContactKind) {
        return this.add('ContactKinds', value);
    }

    RemoveContactKind(value: OrganisationContactKind) {
        return this.remove('ContactKinds', value);
    }

    set ContactKinds(value: OrganisationContactKind[]) {
        this.set('ContactKinds', value);
    }

    get CanReadParties(): boolean {
        return this.canRead('Parties');
    }

    get Parties(): Party[] {
        return this.get('Parties');
    }


    get CanReadFromDate(): boolean {
        return this.canRead('FromDate');
    }

    get CanWriteFromDate(): boolean {
        return this.canWrite('FromDate');
    }

    get FromDate(): Date {
        return this.get('FromDate');
    }

    set FromDate(value: Date) {
        this.set('FromDate', value);
    }

    get CanReadThroughDate(): boolean {
        return this.canRead('ThroughDate');
    }

    get CanWriteThroughDate(): boolean {
        return this.canWrite('ThroughDate');
    }

    get ThroughDate(): Date {
        return this.get('ThroughDate');
    }

    set ThroughDate(value: Date) {
        this.set('ThroughDate', value);
    }


    get CanExecuteDelete(): boolean {
        return this.canExecute('Delete');
    }

    get Delete(): Method {
        return new Method(this, 'Delete');
    }
}
