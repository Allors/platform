"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class Colour extends framework_1.SessionObject {
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
    get CanReadEstimatedProductCosts() {
        return this.canRead('EstimatedProductCosts');
    }
    get CanWriteEstimatedProductCosts() {
        return this.canWrite('EstimatedProductCosts');
    }
    get EstimatedProductCosts() {
        return this.get('EstimatedProductCosts');
    }
    AddEstimatedProductCost(value) {
        return this.add('EstimatedProductCosts', value);
    }
    RemoveEstimatedProductCost(value) {
        return this.remove('EstimatedProductCosts', value);
    }
    set EstimatedProductCosts(value) {
        this.set('EstimatedProductCosts', value);
    }
    get CanReadBasePrices() {
        return this.canRead('BasePrices');
    }
    get BasePrices() {
        return this.get('BasePrices');
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
    get CanReadDependentFeatures() {
        return this.canRead('DependentFeatures');
    }
    get CanWriteDependentFeatures() {
        return this.canWrite('DependentFeatures');
    }
    get DependentFeatures() {
        return this.get('DependentFeatures');
    }
    AddDependentFeature(value) {
        return this.add('DependentFeatures', value);
    }
    RemoveDependentFeature(value) {
        return this.remove('DependentFeatures', value);
    }
    set DependentFeatures(value) {
        this.set('DependentFeatures', value);
    }
    get CanReadIncompatibleFeatures() {
        return this.canRead('IncompatibleFeatures');
    }
    get CanWriteIncompatibleFeatures() {
        return this.canWrite('IncompatibleFeatures');
    }
    get IncompatibleFeatures() {
        return this.get('IncompatibleFeatures');
    }
    AddIncompatibleFeature(value) {
        return this.add('IncompatibleFeatures', value);
    }
    RemoveIncompatibleFeature(value) {
        return this.remove('IncompatibleFeatures', value);
    }
    set IncompatibleFeatures(value) {
        this.set('IncompatibleFeatures', value);
    }
    get CanReadVatRate() {
        return this.canRead('VatRate');
    }
    get CanWriteVatRate() {
        return this.canWrite('VatRate');
    }
    get VatRate() {
        return this.get('VatRate');
    }
    set VatRate(value) {
        this.set('VatRate', value);
    }
}
exports.Colour = Colour;
//# sourceMappingURL=Colour.g.js.map