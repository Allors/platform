import { AfterViewInit, Component, Optional, QueryList, ViewChildren } from "@angular/core";
import { NgForm, NgModel } from "@angular/forms";

import { Field } from "../../../../angular";

@Component({
  selector: "a-mat-input",
  templateUrl: "./input.component.html",
})
export class InputComponent extends Field implements AfterViewInit {
  @ViewChildren(NgModel) private controls: QueryList<NgModel>;

  constructor( @Optional() private parentForm: NgForm) {
    super();
  }

  public ngAfterViewInit(): void {
    if (!!this.parentForm) {
      this.controls.forEach((control: NgModel) => {
        this.parentForm.addControl(control);
      });
    }
  }
}