"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class EmploymentTerminationReason extends framework_1.SessionObject {
    get CanReadLocalisedNames() {
        return this.canRead('LocalisedNames');
    }
    get CanWriteLocalisedNames() {
        return this.canWrite('LocalisedNames');
    }
    get LocalisedNames() {
        return this.get('LocalisedNames');
    }
    AddLocalisedName(value) {
        return this.add('LocalisedNames', value);
    }
    RemoveLocalisedName(value) {
        return this.remove('LocalisedNames', value);
    }
    set LocalisedNames(value) {
        this.set('LocalisedNames', value);
    }
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
    get CanReadIsActive() {
        return this.canRead('IsActive');
    }
    get CanWriteIsActive() {
        return this.canWrite('IsActive');
    }
    get IsActive() {
        return this.get('IsActive');
    }
    set IsActive(value) {
        this.set('IsActive', value);
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
    get CanExecuteDelete() {
        return this.canExecute('Delete');
    }
    get Delete() {
        return new framework_1.Method(this, 'Delete');
    }
}
exports.EmploymentTerminationReason = EmploymentTerminationReason;
//# sourceMappingURL=EmploymentTerminationReason.g.js.map