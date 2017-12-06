"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class SubContractorAgreement extends framework_1.SessionObject {
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
}
exports.SubContractorAgreement = SubContractorAgreement;
//# sourceMappingURL=SubContractorAgreement.g.js.map