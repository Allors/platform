"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class DiscountComponent extends framework_1.SessionObject {
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
}
exports.DiscountComponent = DiscountComponent;
//# sourceMappingURL=DiscountComponent.g.js.map