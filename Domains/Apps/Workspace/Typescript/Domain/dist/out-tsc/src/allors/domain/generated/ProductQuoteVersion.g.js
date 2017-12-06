"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class ProductQuoteVersion extends framework_1.SessionObject {
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
    get CanWritePrice() {
        return this.canWrite('Price');
    }
    get Price() {
        return this.get('Price');
    }
    set Price(value) {
        this.set('Price', value);
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
exports.ProductQuoteVersion = ProductQuoteVersion;
//# sourceMappingURL=ProductQuoteVersion.g.js.map