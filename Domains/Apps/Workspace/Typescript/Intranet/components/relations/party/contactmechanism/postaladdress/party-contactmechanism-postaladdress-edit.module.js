"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const shared_module_1 = require("../../../../shared.module");
const party_contactmechanism_postaladdress_edit_component_1 = require("./party-contactmechanism-postaladdress-edit.component");
var party_contactmechanism_postaladdress_edit_component_2 = require("./party-contactmechanism-postaladdress-edit.component");
exports.PartyContactMechanismPostalAddressEditComponent = party_contactmechanism_postaladdress_edit_component_2.PartyContactMechanismPostalAddressEditComponent;
let PartyContactMechanismPostalAddressEditModule = class PartyContactMechanismPostalAddressEditModule {
};
PartyContactMechanismPostalAddressEditModule = __decorate([
    core_1.NgModule({
        declarations: [
            party_contactmechanism_postaladdress_edit_component_1.PartyContactMechanismPostalAddressEditComponent,
        ],
        exports: [
            party_contactmechanism_postaladdress_edit_component_1.PartyContactMechanismPostalAddressEditComponent,
            shared_module_1.SharedModule,
        ],
        imports: [
            shared_module_1.SharedModule,
        ],
    })
], PartyContactMechanismPostalAddressEditModule);
exports.PartyContactMechanismPostalAddressEditModule = PartyContactMechanismPostalAddressEditModule;