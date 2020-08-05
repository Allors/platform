import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AllorsFocusService {
  public focus$: Observable<any>;
  private focusSubject: BehaviorSubject<any>;

  constructor() {
    this.focusSubject = new BehaviorSubject(undefined);
    this.focus$ = this.focusSubject;
  }

  focus(trigger: any): void {
    this.focusSubject.next(trigger);
  }
}