// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { Commentable } from './Commentable.g';
import { PartyRelationship } from './PartyRelationship.g';
import { Period } from './Period.g';
import { Deletable } from './Deletable.g';
import { Person } from './Person.g';
import { ProductCategory } from './ProductCategory.g';
import { Party } from './Party.g';

export class SalesRepRelationship extends SessionObject implements Commentable, PartyRelationship {
    get CanReadSalesRepresentative(): boolean {
        return this.canRead('SalesRepresentative');
    }

    get CanWriteSalesRepresentative(): boolean {
        return this.canWrite('SalesRepresentative');
    }

    get SalesRepresentative(): Person {
        return this.get('SalesRepresentative');
    }

    set SalesRepresentative(value: Person) {
        this.set('SalesRepresentative', value);
    }

    get CanReadLastYearsCommission(): boolean {
        return this.canRead('LastYearsCommission');
    }

    get LastYearsCommission(): number {
        return this.get('LastYearsCommission');
    }


    get CanReadProductCategories(): boolean {
        return this.canRead('ProductCategories');
    }

    get CanWriteProductCategories(): boolean {
        return this.canWrite('ProductCategories');
    }

    get ProductCategories(): ProductCategory[] {
        return this.get('ProductCategories');
    }

    AddProductCategory(value: ProductCategory) {
        return this.add('ProductCategories', value);
    }

    RemoveProductCategory(value: ProductCategory) {
        return this.remove('ProductCategories', value);
    }

    set ProductCategories(value: ProductCategory[]) {
        this.set('ProductCategories', value);
    }

    get CanReadYTDCommission(): boolean {
        return this.canRead('YTDCommission');
    }

    get YTDCommission(): number {
        return this.get('YTDCommission');
    }


    get CanReadCustomer(): boolean {
        return this.canRead('Customer');
    }

    get CanWriteCustomer(): boolean {
        return this.canWrite('Customer');
    }

    get Customer(): Party {
        return this.get('Customer');
    }

    set Customer(value: Party) {
        this.set('Customer', value);
    }

    get CanReadComment(): boolean {
        return this.canRead('Comment');
    }

    get CanWriteComment(): boolean {
        return this.canWrite('Comment');
    }

    get Comment(): string {
        return this.get('Comment');
    }

    set Comment(value: string) {
        this.set('Comment', value);
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
