"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class Proposal extends framework_1.SessionObject {
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
    get CanReadQuoteState() {
        return this.canRead('QuoteState');
    }
    get CanWriteQuoteState() {
        return this.canWrite('QuoteState');
    }
    get QuoteState() {
        return this.get('QuoteState');
    }
    set QuoteState(value) {
        this.set('QuoteState', value);
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
    get CanReadValidFromDate() {
        return this.canRead('ValidFromDate');
    }
    get CanWriteValidFromDate() {
        return this.canWrite('ValidFromDate');
    }
    get ValidFromDate() {
        return this.get('ValidFromDate');
    }
    set ValidFromDate(value) {
        this.set('ValidFromDate', value);
    }
    get CanReadQuoteTerms() {
        return this.canRead('QuoteTerms');
    }
    get CanWriteQuoteTerms() {
        return this.canWrite('QuoteTerms');
    }
    get QuoteTerms() {
        return this.get('QuoteTerms');
    }
    AddQuoteTerm(value) {
        return this.add('QuoteTerms', value);
    }
    RemoveQuoteTerm(value) {
        return this.remove('QuoteTerms', value);
    }
    set QuoteTerms(value) {
        this.set('QuoteTerms', value);
    }
    get CanReadValidThroughDate() {
        return this.canRead('ValidThroughDate');
    }
    get CanWriteValidThroughDate() {
        return this.canWrite('ValidThroughDate');
    }
    get ValidThroughDate() {
        return this.get('ValidThroughDate');
    }
    set ValidThroughDate(value) {
        this.set('ValidThroughDate', value);
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
    get CanReadReceiver() {
        return this.canRead('Receiver');
    }
    get CanWriteReceiver() {
        return this.canWrite('Receiver');
    }
    get Receiver() {
        return this.get('Receiver');
    }
    set Receiver(value) {
        this.set('Receiver', value);
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
    get CanReadPrice() {
        return this.canRead('Price');
    }
    get Price() {
        return this.get('Price');
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
    get CanReadIssueDate() {
        return this.canRead('IssueDate');
    }
    get CanWriteIssueDate() {
        return this.canWrite('IssueDate');
    }
    get IssueDate() {
        return this.get('IssueDate');
    }
    set IssueDate(value) {
        this.set('IssueDate', value);
    }
    get CanReadQuoteItems() {
        return this.canRead('QuoteItems');
    }
    get CanWriteQuoteItems() {
        return this.canWrite('QuoteItems');
    }
    get QuoteItems() {
        return this.get('QuoteItems');
    }
    AddQuoteItem(value) {
        return this.add('QuoteItems', value);
    }
    RemoveQuoteItem(value) {
        return this.remove('QuoteItems', value);
    }
    set QuoteItems(value) {
        this.set('QuoteItems', value);
    }
    get CanReadQuoteNumber() {
        return this.canRead('QuoteNumber');
    }
    get CanWriteQuoteNumber() {
        return this.canWrite('QuoteNumber');
    }
    get QuoteNumber() {
        return this.get('QuoteNumber');
    }
    set QuoteNumber(value) {
        this.set('QuoteNumber', value);
    }
    get CanReadRequest() {
        return this.canRead('Request');
    }
    get CanWriteRequest() {
        return this.canWrite('Request');
    }
    get Request() {
        return this.get('Request');
    }
    set Request(value) {
        this.set('Request', value);
    }
    get CanReadContactPerson() {
        return this.canRead('ContactPerson');
    }
    get CanWriteContactPerson() {
        return this.canWrite('ContactPerson');
    }
    get ContactPerson() {
        return this.get('ContactPerson');
    }
    set ContactPerson(value) {
        this.set('ContactPerson', value);
    }
    get CanReadPrintContent() {
        return this.canRead('PrintContent');
    }
    get CanWritePrintContent() {
        return this.canWrite('PrintContent');
    }
    get PrintContent() {
        return this.get('PrintContent');
    }
    set PrintContent(value) {
        this.set('PrintContent', value);
    }
    get CanReadCreatedBy() {
        return this.canRead('CreatedBy');
    }
    get CanWriteCreatedBy() {
        return this.canWrite('CreatedBy');
    }
    get CreatedBy() {
        return this.get('CreatedBy');
    }
    set CreatedBy(value) {
        this.set('CreatedBy', value);
    }
    get CanReadLastModifiedBy() {
        return this.canRead('LastModifiedBy');
    }
    get CanWriteLastModifiedBy() {
        return this.canWrite('LastModifiedBy');
    }
    get LastModifiedBy() {
        return this.get('LastModifiedBy');
    }
    set LastModifiedBy(value) {
        this.set('LastModifiedBy', value);
    }
    get CanReadCreationDate() {
        return this.canRead('CreationDate');
    }
    get CanWriteCreationDate() {
        return this.canWrite('CreationDate');
    }
    get CreationDate() {
        return this.get('CreationDate');
    }
    set CreationDate(value) {
        this.set('CreationDate', value);
    }
    get CanReadLastModifiedDate() {
        return this.canRead('LastModifiedDate');
    }
    get CanWriteLastModifiedDate() {
        return this.canWrite('LastModifiedDate');
    }
    get LastModifiedDate() {
        return this.get('LastModifiedDate');
    }
    set LastModifiedDate(value) {
        this.set('LastModifiedDate', value);
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
    get CanExecuteApprove() {
        return this.canExecute('Approve');
    }
    get Approve() {
        return new framework_1.Method(this, 'Approve');
    }
    get CanExecuteReject() {
        return this.canExecute('Reject');
    }
    get Reject() {
        return new framework_1.Method(this, 'Reject');
    }
}
exports.Proposal = Proposal;
//# sourceMappingURL=Proposal.g.js.map