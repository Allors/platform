// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { AgreementTerm } from './AgreementTerm.g';
import { TermType } from './TermType.g';
import { InvoiceItemVersion } from './InvoiceItemVersion.g';
import { InvoiceItem } from './InvoiceItem.g';

export class Incentive extends SessionObject implements AgreementTerm {
    get CanReadTermValue(): boolean {
        return this.canRead('TermValue');
    }

    get CanWriteTermValue(): boolean {
        return this.canWrite('TermValue');
    }

    get TermValue(): string {
        return this.get('TermValue');
    }

    set TermValue(value: string) {
        this.set('TermValue', value);
    }

    get CanReadTermType(): boolean {
        return this.canRead('TermType');
    }

    get CanWriteTermType(): boolean {
        return this.canWrite('TermType');
    }

    get TermType(): TermType {
        return this.get('TermType');
    }

    set TermType(value: TermType) {
        this.set('TermType', value);
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


}
