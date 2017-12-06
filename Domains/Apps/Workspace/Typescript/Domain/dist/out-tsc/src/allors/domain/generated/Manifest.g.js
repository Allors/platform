"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class Manifest extends framework_1.SessionObject {
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
exports.Manifest = Manifest;
//# sourceMappingURL=Manifest.g.js.map