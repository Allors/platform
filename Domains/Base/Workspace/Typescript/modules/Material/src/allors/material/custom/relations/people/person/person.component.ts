import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';

import { Enumeration, Locale, Organisation, Person } from '../../../../../domain';
import { Equals, Fetch, Like, Page, Path, PullRequest, PushResponse, Query, Sort, TreeNode } from '../../../../../framework';
import { MetaDomain } from '../../../../../meta';

import { ErrorService, Loaded, Saved, Scope, WorkspaceService } from '../../../../../angular';

@Component({
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit, AfterViewInit, OnDestroy {

  public title: string;

  public m: MetaDomain;
  public locales: Locale[];
  public person: Person;

  private subscription: Subscription;
  private scope: Scope;

  constructor(
    private workspaceService: WorkspaceService,
    private errorService: ErrorService,
    private titleService: Title,
    private route: ActivatedRoute) {

    this.title = 'Person';
    this.titleService.setTitle(this.title);
    this.scope = this.workspaceService.createScope();
    this.m = this.workspaceService.metaPopulation.metaDomain;
  }

  public ngOnInit(): void {
    this.subscription = this.route.url
      .switchMap((url: any) => {

        const id: string = this.route.snapshot.paramMap.get('id');

        const fetches: Fetch[] = [
          new Fetch({
            id,
            include: [
              new TreeNode({ roleType: this.m.Person.Photo }),
              new TreeNode({ roleType: this.m.Person.Pictures }),
            ],
            name: 'person',
          }),
        ];

        const queries: Query[] = [
          new Query(
            {
              name: 'locales',
              objectType: this.m.Locale,
            }),
        ];

        this.scope.session.reset();

        return this.scope
          .load('Pull', new PullRequest({ fetches, queries }));
      })
      .subscribe((loaded: Loaded) => {

        this.person = loaded.objects.person as Person;
        if (!this.person) {
          this.person = this.scope.session.create('Person') as Person;
        }

        this.locales = loaded.collections.locales as Locale[];
      },
      (error: any) => {
        this.errorService.handle(error);
        this.goBack();
      },
    );
  }

  public ngAfterViewInit(): void {
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public save(): void {

    this.scope
      .save()
      .subscribe((saved: Saved) => {
        this.goBack();
      },
      (error: Error) => {
        this.errorService.handle(error);
      });
  }

  public goBack(): void {
    window.history.back();
  }
}
