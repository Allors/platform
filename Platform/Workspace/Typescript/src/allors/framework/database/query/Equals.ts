﻿import { AssociationType, RoleType } from "../../meta";

import { Predicate } from "./Predicate";

export class Equals implements Predicate {
  public associationType: AssociationType;
  public roleType: RoleType;
  public value: any;

  constructor(fields?: Partial<Equals>) {
    Object.assign(this, fields);
  }

  public toJSON(): any {
    if (this.roleType.objectType.isUnit) {
      return {
        _T: "Equals",
        at: this.associationType ? this.associationType.id : undefined,
        rt: this.roleType ? this.roleType.id : undefined,
        v: this.value,
      };
    } else {
      return {
        _T: "Equals",
        at: this.associationType ? this.associationType.id : undefined,
        rt: this.roleType ? this.roleType.id : undefined,
        o: this.value ? this.value.id ? this.value.id : this.value : undefined,
      };
    }
  }
}
