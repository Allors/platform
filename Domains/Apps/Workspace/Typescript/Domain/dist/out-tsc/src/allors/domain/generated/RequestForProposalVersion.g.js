"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class RequestForProposalVersion extends framework_1.SessionObject {
    get CanReadRequestState() {
        return this.canRead('RequestState');
    }
    get CanWriteRequestState() {
        return this.canWrite('RequestState');
    }
    get RequestState() {
        return this.get('RequestState');
    }
    set RequestState(value) {
        this.set('RequestState', value);
    }
    get CanReadInternalComment() {
        return this.canRead('InternalComment');
    }
    get CanWriteInternalComment() {
        return this.canWrite('InternalComment');
    }
    get InternalComment() {
        return this.get('InternalComment');
    }
    set InternalComment(value) {
        this.set('InternalComment', value);
    }
    get CanReadDescription() {
        return this.canRead('Description');
    }
    get CanWriteDescription() {
        return this.canWrite('Description');
    }
    get Description() {
        return this.get('Description');
    }
    set Description(value) {
        this.set('Description', value);
    }
    get CanReadRequestDate() {
        return this.canRead('RequestDate');
    }
    get CanWriteRequestDate() {
        return this.canWrite('RequestDate');
    }
    get RequestDate() {
        return this.get('RequestDate');
    }
    set RequestDate(value) {
        this.set('RequestDate', value);
    }
    get CanReadRequiredResponseDate() {
        return this.canRead('RequiredResponseDate');
    }
    get CanWriteRequiredResponseDate() {
        return this.canWrite('RequiredResponseDate');
    }
    get RequiredResponseDate() {
        return this.get('RequiredResponseDate');
    }
    set RequiredResponseDate(value) {
        this.set('RequiredResponseDate', value);
    }
    get CanReadRequestItems() {
        return this.canRead('RequestItems');
    }
    get CanWriteRequestItems() {
        return this.canWrite('RequestItems');
    }
    get RequestItems() {
        return this.get('RequestItems');
    }
    AddRequestItem(value) {
        return this.add('RequestItems', value);
    }
    RemoveRequestItem(value) {
        return this.remove('RequestItems', value);
    }
    set RequestItems(value) {
        this.set('RequestItems', value);
    }
    get CanReadRequestNumber() {
        return this.canRead('RequestNumber');
    }
    get CanWriteRequestNumber() {
        return this.canWrite('RequestNumber');
    }
    get RequestNumber() {
        return this.get('RequestNumber');
    }
    set RequestNumber(value) {
        this.set('RequestNumber', value);
    }
    get CanReadRespondingParties() {
        return this.canRead('RespondingParties');
    }
    get CanWriteRespondingParties() {
        return this.canWrite('RespondingParties');
    }
    get RespondingParties() {
        return this.get('RespondingParties');
    }
    AddRespondingParty(value) {
        return this.add('RespondingParties', value);
    }
    RemoveRespondingParty(value) {
        return this.remove('RespondingParties', value);
    }
    set RespondingParties(value) {
        this.set('RespondingParties', value);
    }
    get CanReadOriginator() {
        return this.canRead('Originator');
    }
    get CanWriteOriginator() {
        return this.canWrite('Originator');
    }
    get Originator() {
        return this.get('Originator');
    }
    set Originator(value) {
        this.set('Originator', value);
    }
    get CanReadCurrency() {
        return this.canRead('Currency');
    }
    get CanWriteCurrency() {
        return this.canWrite('Currency');
    }
    get Currency() {
        return this.get('Currency');
    }
    set Currency(value) {
        this.set('Currency', value);
    }
    get CanReadFullfillContactMechanism() {
        return this.canRead('FullfillContactMechanism');
    }
    get CanWriteFullfillContactMechanism() {
        return this.canWrite('FullfillContactMechanism');
    }
    get FullfillContactMechanism() {
        return this.get('FullfillContactMechanism');
    }
    set FullfillContactMechanism(value) {
        this.set('FullfillContactMechanism', value);
    }
    get CanReadEmailAddress() {
        return this.canRead('EmailAddress');
    }
    get CanWriteEmailAddress() {
        return this.canWrite('EmailAddress');
    }
    get EmailAddress() {
        return this.get('EmailAddress');
    }
    set EmailAddress(value) {
        this.set('EmailAddress', value);
    }
    get CanReadTelephoneNumber() {
        return this.canRead('TelephoneNumber');
    }
    get CanWriteTelephoneNumber() {
        return this.canWrite('TelephoneNumber');
    }
    get TelephoneNumber() {
        return this.get('TelephoneNumber');
    }
    set TelephoneNumber(value) {
        this.set('TelephoneNumber', value);
    }
    get CanReadTelephoneCountryCode() {
        return this.canRead('TelephoneCountryCode');
    }
    get CanWriteTelephoneCountryCode() {
        return this.canWrite('TelephoneCountryCode');
    }
    get TelephoneCountryCode() {
        return this.get('TelephoneCountryCode');
    }
    set TelephoneCountryCode(value) {
        this.set('TelephoneCountryCode', value);
    }
    get CanReadDerivationTimeStamp() {
        return this.canRead('DerivationTimeStamp');
    }
    get CanWriteDerivationTimeStamp() {
        return this.canWrite('DerivationTimeStamp');
    }
    get DerivationTimeStamp() {
        return this.get('DerivationTimeStamp');
    }
    set DerivationTimeStamp(value) {
        this.set('DerivationTimeStamp', value);
    }
}
exports.RequestForProposalVersion = RequestForProposalVersion;
//# sourceMappingURL=RequestForProposalVersion.g.js.map