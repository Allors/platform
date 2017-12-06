"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class AccountingPeriod extends framework_1.SessionObject {
    get CanReadCurrentVersion() {
        return this.canRead('CurrentVersion');
    }
    get CanWriteCurrentVersion() {
        return this.canWrite('CurrentVersion');
    }
    get CurrentVersion() {
        return this.get('CurrentVersion');
    }
    set CurrentVersion(value) {
        this.set('CurrentVersion', value);
    }
    get CanReadAllVersions() {
        return this.canRead('AllVersions');
    }
    get CanWriteAllVersions() {
        return this.canWrite('AllVersions');
    }
    get AllVersions() {
        return this.get('AllVersions');
    }
    AddAllVersion(value) {
        return this.add('AllVersions', value);
    }
    RemoveAllVersion(value) {
        return this.remove('AllVersions', value);
    }
    set AllVersions(value) {
        this.set('AllVersions', value);
    }
    get CanReadBudgetState() {
        return this.canRead('BudgetState');
    }
    get CanWriteBudgetState() {
        return this.canWrite('BudgetState');
    }
    get BudgetState() {
        return this.get('BudgetState');
    }
    set BudgetState(value) {
        this.set('BudgetState', value);
    }
    get CanReadFromDate() {
        return this.canRead('FromDate');
    }
    get CanWriteFromDate() {
        return this.canWrite('FromDate');
    }
    get FromDate() {
        return this.get('FromDate');
    }
    set FromDate(value) {
        this.set('FromDate', value);
    }
    get CanReadThroughDate() {
        return this.canRead('ThroughDate');
    }
    get CanWriteThroughDate() {
        return this.canWrite('ThroughDate');
    }
    get ThroughDate() {
        return this.get('ThroughDate');
    }
    set ThroughDate(value) {
        this.set('ThroughDate', value);
    }
    get CanReadComment() {
        return this.canRead('Comment');
    }
    get CanWriteComment() {
        return this.canWrite('Comment');
    }
    get Comment() {
        return this.get('Comment');
    }
    set Comment(value) {
        this.set('Comment', value);
    }
    get CanReadUniqueId() {
        return this.canRead('UniqueId');
    }
    get CanWriteUniqueId() {
        return this.canWrite('UniqueId');
    }
    get UniqueId() {
        return this.get('UniqueId');
    }
    set UniqueId(value) {
        this.set('UniqueId', value);
    }
}
exports.AccountingPeriod = AccountingPeriod;
//# sourceMappingURL=AccountingPeriod.g.js.map