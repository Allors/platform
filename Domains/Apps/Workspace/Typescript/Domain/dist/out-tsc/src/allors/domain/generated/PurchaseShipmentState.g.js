"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class PurchaseShipmentState extends framework_1.SessionObject {
    get CanReadName() {
        return this.canRead('Name');
    }
    get CanWriteName() {
        return this.canWrite('Name');
    }
    get Name() {
        return this.get('Name');
    }
    set Name(value) {
        this.set('Name', value);
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
exports.PurchaseShipmentState = PurchaseShipmentState;
//# sourceMappingURL=PurchaseShipmentState.g.js.map