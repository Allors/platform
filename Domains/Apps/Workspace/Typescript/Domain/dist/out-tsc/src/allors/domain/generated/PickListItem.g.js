"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class PickListItem extends framework_1.SessionObject {
    get CanExecuteDelete() {
        return this.canExecute('Delete');
    }
    get Delete() {
        return new framework_1.Method(this, 'Delete');
    }
}
exports.PickListItem = PickListItem;
//# sourceMappingURL=PickListItem.g.js.map