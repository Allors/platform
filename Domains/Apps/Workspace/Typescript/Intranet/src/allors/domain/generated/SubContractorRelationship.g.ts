// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { PartyRelationship } from './PartyRelationship.g';
import { Period } from './Period.g';
import { Deletable } from './Deletable.g';
import { Party } from './Party.g';

export class SubContractorRelationship extends SessionObject implements PartyRelationship {
    get CanReadContractor(): boolean {
        return this.canRead('Contractor');
    }

    get CanWriteContractor(): boolean {
        return this.canWrite('Contractor');
    }

    get Contractor(): Party {
        return this.get('Contractor');
    }

    set Contractor(value: Party) {
        this.set('Contractor', value);
    }

    get CanReadSubContractor(): boolean {
        return this.canRead('SubContractor');
    }

    get CanWriteSubContractor(): boolean {
        return this.canWrite('SubContractor');
    }

    get SubContractor(): Party {
        return this.get('SubContractor');
    }

    set SubContractor(value: Party) {
        this.set('SubContractor', value);
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
