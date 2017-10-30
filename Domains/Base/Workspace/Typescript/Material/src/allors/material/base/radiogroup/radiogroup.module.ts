import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MatRadioModule } from "@angular/material";

import { RadioGroupComponent } from "./radiogroup.component";
export { RadioGroupComponent } from "./radiogroup.component";

@NgModule({
  declarations: [
    RadioGroupComponent,
  ],
  exports: [
    RadioGroupComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatRadioModule,
  ],
})
export class RadioGroupModule {
}