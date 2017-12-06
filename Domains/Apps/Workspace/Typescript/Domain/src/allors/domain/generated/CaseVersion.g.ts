// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { Version } from './Version.g';
import { CaseState } from './CaseState.g';
import { Case } from './Case.g';

export class CaseVersion extends SessionObject implements Version {
    get CanReadCaseState(): boolean {
        return this.canRead('CaseState');
    }

    get CaseState(): CaseState {
        return this.get('CaseState');
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
