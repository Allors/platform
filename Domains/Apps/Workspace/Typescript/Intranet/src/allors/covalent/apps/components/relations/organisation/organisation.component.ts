import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { TdMediaService } from "@covalent/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import "rxjs/add/observable/combineLatest";

import { ErrorService, Loaded, Saved, Scope, WorkspaceService } from "../../../../../angular";
import { CustomerRelationship, CustomOrganisationClassification, IndustryClassification, Locale, Organisation, OrganisationRole } from "../../../../../domain";
import { Fetch, Path, PullRequest, Query } from "../../../../../framework";
import { MetaDomain } from "../../../../../meta";

@Component({
  templateUrl: "./organisation.component.html",
})
export class OrganisationComponent implements OnInit, OnDestroy {

  public title: string = "Organisation";
  public subTitle: string;

  public m: MetaDomain;

  public organisation: Organisation;

  public locales: Locale[];
  public roles: OrganisationRole[];
  public classifications: CustomOrganisationClassification[];
  public industries: IndustryClassification[];
  public customerRelationships: CustomerRelationship[];

  private refresh$: BehaviorSubject<Date>;
  private subscription: Subscription;
  private scope: Scope;
  private customerRole: OrganisationRole;

  constructor(
    private workspaceService: WorkspaceService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    public media: TdMediaService,
    private changeDetectorRef: ChangeDetectorRef) {

    this.scope = this.workspaceService.createScope();
    this.m = this.workspaceService.metaPopulation.metaDomain;
    this.refresh$ = new BehaviorSubject<Date>(undefined);
  }

  public ngOnInit(): void {

    this.subscription = Observable.combineLatest(this.route.url, this.refresh$)
      .switchMap(([urlSegments, date]) => {

        const id: string = this.route.snapshot.paramMap.get("id");

        const fetch: Fetch[] = [
          new Fetch({
            name: "organisation",
            id,
          }),
          new Fetch({
            name: "customerRelationships",
            id,
            path: new Path({ step: this.m.Organisation.CustomerRelationshipsWhereCustomer }),
          }),
        ];

        const query: Query[] = [
          new Query(
            {
              name: "locales",
              objectType: this.m.Locale,
            }),
          new Query(
            {
              name: "roles",
              objectType: this.m.OrganisationRole,
            }),
          new Query(
            {
              name: "classifications",
              objectType: this.m.CustomOrganisationClassification,
            }),
          new Query(
            {
              name: "industries",
              objectType: this.m.IndustryClassification,
            }),
        ];

        return this.scope
          .load("Pull", new PullRequest({ fetch, query }));
      })
      .subscribe((loaded) => {

        this.subTitle = "edit organisation";
        this.organisation = loaded.objects.organisation as Organisation;
        this.customerRelationships = loaded.collections.customerRelationships as CustomerRelationship[];

        if (!this.organisation) {
          this.subTitle = "add a new organisation";
          this.organisation = this.scope.session.create("Organisation") as Organisation;
        }

        this.locales = loaded.collections.locales as Locale[];
        this.classifications = loaded.collections.classifications as CustomOrganisationClassification[];
        this.industries = loaded.collections.industries as IndustryClassification[];
        this.roles = loaded.collections.roles as OrganisationRole[];
        this.customerRole = this.roles.find((v: OrganisationRole) => v.UniqueId.toUpperCase() === "8B5E0CEE-4C98-42F1-8F18-3638FBA943A0");
      },
      (error: any) => {
        this.errorService.message(error);
        this.goBack();
      },
    );
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public save(): void {

    if (this.organisation.OrganisationRoles.indexOf(this.customerRole) > -1 && this.customerRelationships === undefined) {
      const customerRelationship = this.scope.session.create("CustomerRelationship") as CustomerRelationship;
      customerRelationship.Customer = this.organisation;
    }

    this.scope
      .save()
      .subscribe((saved: Saved) => {
        this.goBack();
      },
      (error: Error) => {
        this.errorService.dialog(error);
      });
  }

  public goBack(): void {
    window.history.back();
  }
}