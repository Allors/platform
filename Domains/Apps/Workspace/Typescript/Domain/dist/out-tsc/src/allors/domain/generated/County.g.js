"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class County extends framework_1.SessionObject {
    get CanReadLatitude() {
        return this.canRead('Latitude');
    }
    get Latitude() {
        return this.get('Latitude');
    }
    get CanReadLongitude() {
        return this.canRead('Longitude');
    }
    get Longitude() {
        return this.get('Longitude');
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
exports.County = County;
//# sourceMappingURL=County.g.js.map