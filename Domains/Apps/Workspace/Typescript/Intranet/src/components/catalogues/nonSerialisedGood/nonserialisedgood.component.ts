import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { TdMediaService } from "@covalent/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs/Rx";

import { PostalAddress, MetaDomain, SalesOrder, SalesInvoice, Good, SalesInvoiceItem, Catalogue, Singleton, Locale, ProductCategory, CatScope, PartyContactMechanism, Enumeration, ContactMechanismType, TelecommunicationsNumber, WorkEffortAssignment, WorkEffortState, Priority, Person, WorkTask, WorkEffortPurpose, CommunicationEvent, Organisation, OrganisationContactRelationship, ContactMechanism, PersonRole, CustomerRelationship, Country, Facility, ProductType, ProductCharacteristicValue, Brand, Model, VarianceReason, InventoryItemKind, NonSerialisedInventoryItem, NonSerialisedInventoryItemState, VatRate, OrganisationRole, ProductFeature, InventoryItemVariance, ProductCharacteristic, LocalisedText } from "@allors/workspace";
import { Scope, WorkspaceService, Saved, ErrorService, Loaded, Invoked, Filter } from "@allors/base-angular";
import { Fetch, TreeNode, Path, Query, PullRequest, And, Predicate, Like, ContainedIn, Page, Sort, Equals, Contains } from "@allors/framework";

@Component({
  template: `
<td-layout-card-over [cardTitle]="title" [cardSubtitle]="subTitle">

    <form #form="ngForm" *ngIf="good" (submit)="save()">
      <div class="pad">
        <mat-tab-group>

          <mat-tab label="General">
            <!-- <a-mat-select [object]="inventoryItem" [roleType]="m.NonSerialisedInventoryItem.NonSerialisedInventoryItemState"
              [options]="inventoryItemObjectStates" display="Name" label="Status"></a-mat-select> -->
            <a-mat-localised-text [object]="good" [roleType]="m.Good.LocalisedNames" [locales]="locales" label="Name"></a-mat-localised-text>
            <a-mat-localised-text [object]="good" [roleType]="m.Good.LocalisedDescriptions" [locales]="locales" label="Description"></a-mat-localised-text>
            <a-mat-select [object]="inventoryItem" [roleType]="m.NonSerialisedInventoryItem.ProductType" [options]="productTypes"
              display="Name"></a-mat-select>
            <a-mat-select [object]="good" [roleType]="m.Good.ProductCategories" [options]="categories" display="Name"></a-mat-select>
            <a-mat-autocomplete [object]="good" [roleType]="m.Good.PrimaryProductCategory" [options]="categories" display="Name"></a-mat-autocomplete>

            <mat-input-container fxLayout="column" fxLayoutAlign="top stretch">
              <input fxFlex matInput name="actualQuantityOnHand" [(ngModel)]="actualQuantityOnHand" placeholder="Actual Quantity in stock">
            </mat-input-container>

            <div class="mat-input-wrapper">
              <div class="mat-input-flex">
                <div class="mat-input-infix">
                  <mat-select fxFlex [(ngModel)]="selectedBrand" name="brandName" placeholder="Brand" multiple="false" (ngModelChange)="brandSelected($event)">
                    <mat-option>None</mat-option>
                    <mat-option *ngFor="let brand of brands" [value]="brand"> {{ brand.Name }} </mat-option>
                  </mat-select>
                </div>
              </div>
            </div>

            <div class="mat-input-wrapper">
              <div class="mat-input-flex">
                <div class="mat-input-infix">
                  <mat-select fxFlex [(ngModel)]="selectedModel" name="modelName" placeholder="Model" multiple="false">
                    <mat-option>None</mat-option>
                    <mat-option *ngFor="let model of models" [value]="model"> {{ model.Name }} </mat-option>
                  </mat-select>
                </div>
              </div>
            </div>

            <a-mat-autocomplete [object]="good" [roleType]="m.Good.SuppliedBy" [filter]="suppliersFilter.create()" display="Name"></a-mat-autocomplete>
            <a-mat-autocomplete [object]="good" [roleType]="m.Good.ManufacturedBy" [filter]="manufacturersFilter.create()" display="Name"></a-mat-autocomplete>
            <a-mat-datepicker [object]="good" [roleType]="m.Good.SalesDiscontinuationDate"></a-mat-datepicker>
          </mat-tab>

          <mat-tab label="Characteristics">

            <mat-radio-group name="rg" [(ngModel)]="selectedLocaleName">
              <mat-radio-button *ngFor="let locale of locales" [value]="locale.Name">
                {{locale.Language.Name}}
              </mat-radio-button>
            </mat-radio-group>

            <mat-divider></mat-divider>

            <a-mat-textarea *ngFor="let productCharacteristicValue of productCharacteristicValues" [object]="productCharacteristicValue"
              [roleType]="m.ProductCharacteristicValue.Value" [label]="localisedName(productCharacteristicValue.ProductCharacteristic)"></a-mat-textarea>
          </mat-tab>

          <mat-tab label="Comments">
            <a-mat-localised-text [object]="good" [roleType]="m.Good.LocalisedComments" [locales]="locales" label="Comment"></a-mat-localised-text>
            <a-mat-textarea [object]="good" [roleType]="m.Good.InternalComment"></a-mat-textarea>
            <a-mat-textarea [object]="good" [roleType]="m.Good.Keywords"></a-mat-textarea>
          </mat-tab>

          <mat-tab label="Images">
            <a-mat-media-upload [object]="good" [roleType]="m.Good.PrimaryPhoto" accept="image/*" (selected)="imageSelected($event)"></a-mat-media-upload>

            <ng-template let-photo let-last="last" ngFor [ngForOf]="good.Photos">
              <mat-list-item>
                <mat-card class="image-card">
                  <mat-card-header>
                    <mat-card-title>{{photo.FileName}}</mat-card-title>
                  </mat-card-header>
                  <img mat-card-image src="http://localhost:5000/Media/Download/{{photo.UniqueId}}?revision={{photo.Revision}}">
                </mat-card>
                </mat-list-item>
              <mat-divider *ngIf="!last" mat-inset></mat-divider>
            </ng-template>
          </mat-tab>

        </mat-tab-group>
      </div>

      <mat-divider></mat-divider>

      <mat-card-actions>
        <button mat-button color="primary" type="submit" [disabled]="!form.form.valid">SAVE</button>
        <button mat-button (click)="goBack()" type="button">CANCEL</button>
      </mat-card-actions>

    </form>
  </td-layout-card-over>
`,
})
export class NonSerialisedGoodComponent implements OnInit, AfterViewInit, OnDestroy {

  public m: MetaDomain;
  public good: Good;

  public title: string;
  public subTitle: string;
  public singleton: Singleton;
  public facility: Facility;
  public locales: Locale[];
  public selectedLocaleName: string;
  public categories: ProductCategory[];
  public productTypes: ProductType[];
  public productCharacteristicValues: ProductCharacteristicValue[];
  public manufacturers: Organisation[];
  public suppliers: Organisation[];
  public brands: Brand[];
  public selectedBrand: Brand;
  public models: Model[];
  public selectedModel: Model;
  public varianceReasons: VarianceReason[];
  public inventoryItemKinds: InventoryItemKind[];
  public inventoryItems: NonSerialisedInventoryItem[];
  public inventoryItem: NonSerialisedInventoryItem;
  public inventoryItemObjectStates: NonSerialisedInventoryItemState[];
  public vatRates: VatRate[];
  public actualQuantityOnHand: number;

  public manufacturersFilter: Filter;
  public suppliersFilter: Filter;

  private subscription: Subscription;
  private scope: Scope;
  private refresh$: BehaviorSubject<Date>;

  constructor(
    private workspaceService: WorkspaceService,
    private errorService: ErrorService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public media: TdMediaService, private changeDetectorRef: ChangeDetectorRef) {

    this.scope = this.workspaceService.createScope()
    this.m = this.workspaceService.metaPopulation.metaDomain;
    this.manufacturersFilter = new Filter({scope: this.scope, objectType: this.m.Organisation, roleTypes: [this.m.Organisation.Name]});
    this.suppliersFilter = new Filter({scope: this.scope, objectType: this.m.Organisation, roleTypes: [this.m.Organisation.Name]});
    this.refresh$ = new BehaviorSubject<Date>(undefined);
  }

  public ngOnInit(): void {

    const route$: Observable<UrlSegment[]> = this.route.url;
    const combined$: Observable<[UrlSegment[], Date]> = Observable.combineLatest(route$, this.refresh$);

    this.subscription = combined$
      .switchMap(([urlSegments, date]: [UrlSegment[], Date]) => {

        const id: string = this.route.snapshot.paramMap.get("id");
        const m: MetaDomain = this.m;

        const fetch: Fetch[] = [
          new Fetch({
            id,
            include: [
              new TreeNode({ roleType: m.Good.PrimaryPhoto }),
              new TreeNode({ roleType: m.Good.Photos }),
              new TreeNode({ roleType: m.Good.LocalisedNames }),
              new TreeNode({ roleType: m.Good.LocalisedDescriptions }),
              new TreeNode({ roleType: m.Good.LocalisedComments }),
              new TreeNode({ roleType: m.Good.ProductCategories }),
              new TreeNode({ roleType: m.Good.InventoryItemKind }),
              new TreeNode({ roleType: m.Good.SuppliedBy }),
              new TreeNode({ roleType: m.Good.ManufacturedBy }),
              new TreeNode({ roleType: m.Good.StandardFeatures }),
            ],
            name: "good",
          }),
          new Fetch({
            id,
            include: [
              new TreeNode({
                nodes: [
                  new TreeNode({
                    nodes: [new TreeNode({ roleType: m.ProductCharacteristic.LocalisedNames })],
                    roleType: m.ProductType.ProductCharacteristics,
                  }),
                ],
                roleType: m.InventoryItem.ProductType,
              }),
              new TreeNode({
                nodes: [
                  new TreeNode({ roleType: m.ProductCharacteristicValue.ProductCharacteristic }),
                ],
                roleType: m.InventoryItem.ProductCharacteristicValues,
              }),
              new TreeNode({
                roleType: m.InventoryItem.InventoryItemVariances,
              }),
            ],
            name: "inventoryItems",
            path: new Path({ step: this.m.Good.InventoryItemsWhereGood }),
          }),
        ];

        const query: Query[] = [
          new Query(
            {
              include: [
                new TreeNode({
                  nodes: [
                    new TreeNode({ roleType: m.Locale.Language }),
                    new TreeNode({ roleType: m.Locale.Country }),
                  ],
                  roleType: m.Singleton.Locales,
                }),
                new TreeNode({
                  nodes: [new TreeNode({ roleType: m.InternalOrganisation.DefaultFacility })],
                  roleType: m.Singleton.InternalOrganisation,
                }),
              ],
              name: "singletons",
              objectType: this.m.Singleton,
            }),
          new Query(
            {
              name: "organisationRoles",
              objectType: this.m.OrganisationRole,
            }),
          new Query(
            {
              name: "categories",
              objectType: this.m.ProductCategory,
            }),
          new Query(
            {
              name: "productTypes",
              objectType: this.m.ProductType,
            }),
          new Query(
            {
              name: "varianceReasons",
              objectType: this.m.VarianceReason,
            }),
          new Query(
            {
              name: "vatRates",
              objectType: this.m.VatRate,
            }),
          new Query(
            {
              name: "brands",
              objectType: this.m.Brand,
              sort: [new Sort({ roleType: m.Brand.Name, direction: "Asc" })],
            }),
          new Query(
            {
              name: "inventoryItemKinds",
              objectType: this.m.InventoryItemKind,
            }),
          new Query(
            {
              name: "nonSerialisedInventoryItemStates",
              objectType: this.m.NonSerialisedInventoryItemState,
            }),
        ];

        return this.scope
          .load("Pull", new PullRequest({ fetch, query }))
          .switchMap((loaded: Loaded) => {

            this.good = loaded.objects.good as Good;
            this.categories = loaded.collections.categories as ProductCategory[];
            this.productTypes = loaded.collections.productTypes as ProductType[];
            this.varianceReasons = loaded.collections.varianceReasons as VarianceReason[];
            this.vatRates = loaded.collections.vatRates as VatRate[];
            this.brands = loaded.collections.brands as Brand[];
            this.inventoryItemKinds = loaded.collections.inventoryItemKinds as InventoryItemKind[];
            this.inventoryItemObjectStates = loaded.collections.nonSerialisedInventoryItemStates as NonSerialisedInventoryItemState[];
            this.singleton = loaded.collections.singletons[0] as Singleton;
            this.facility = this.singleton.InternalOrganisation.DefaultFacility;
            this.locales = this.singleton.Locales;
            this.selectedLocaleName = this.singleton.DefaultLocale.Name;

            const vatRateZero = this.vatRates.find((v: VatRate) => v.Rate === 0);
            const inventoryItemKindNonSerialised = this.inventoryItemKinds.find((v: InventoryItemKind) => v.Name === "Non serialised");

            if (this.good === undefined) {
              this.good = this.scope.session.create("Good") as Good;
              this.good.VatRate = vatRateZero;
              this.good.Sku = "";

              this.inventoryItem = this.scope.session.create("NonSerialisedInventoryItem") as NonSerialisedInventoryItem;
              this.good.InventoryItemKind = inventoryItemKindNonSerialised;
              this.inventoryItem.Good = this.good;
              this.inventoryItem.Facility = this.facility;
            } else {
              this.inventoryItems = loaded.collections.inventoryItems as NonSerialisedInventoryItem[];
              this.inventoryItem = this.inventoryItems[0];
            }

            this.title = this.good.Name;
            this.subTitle = "Non Serialised";
            this.actualQuantityOnHand = this.good.QuantityOnHand;

            const organisationRoles: OrganisationRole[] = loaded.collections.organisationRoles as OrganisationRole[];
            const manufacturerRole: OrganisationRole = organisationRoles.find((v: OrganisationRole) => v.Name === "Manufacturer");
            const supplierRole: OrganisationRole = organisationRoles.find((v: OrganisationRole) => v.Name === "Supplier");

            const Query2: Query[] = [
              new Query(
                {
                  name: "manufacturers",
                  objectType: m.Organisation,
                  predicate: new Contains({ roleType: m.Organisation.OrganisationRoles, object: manufacturerRole }),
                }),
              new Query(
                {
                  name: "suppliers",
                  objectType: m.Organisation,
                  predicate: new Contains({ roleType: m.Organisation.OrganisationRoles, object: supplierRole }),
                }),
            ];

            return this.scope.load("Pull", new PullRequest({ query: Query2 }));
          });
      })
      .subscribe((loaded: Loaded) => {
        this.manufacturers = loaded.collections.manufacturers as Organisation[];
        this.suppliers = loaded.collections.suppliers as Organisation[];
      },
      (error: any) => {
        this.errorService.message(error);
        this.goBack();
      },
    );
  }

  public imageSelected(id: string): void {

    this.good.AddPhoto(this.good.PrimaryPhoto);

    this.update();

    this.snackBar.open("Good succesfully saved.", "close", { duration: 5000 });
  }

  public ngAfterViewInit(): void {
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public update(): void {

      this.scope
        .save()
        .subscribe((saved: Saved) => {
          this.refresh();
        },
        (error: Error) => {
          this.errorService.dialog(error);
        });
    }

    public refresh(): void {
      this.refresh$.next(new Date());
  }

  public save(): void {
    this.good.StandardFeatures.forEach((feature: ProductFeature) => {
      this.good.RemoveStandardFeature(feature);
    });

    if (this.selectedBrand != null) {
      this.good.AddStandardFeature(this.selectedBrand);
    }

    if (this.selectedModel != null) {
      this.good.AddStandardFeature(this.selectedModel);
    }

    if (this.actualQuantityOnHand !== this.good.QuantityOnHand) {
      const reason = this.varianceReasons.find((v: VarianceReason) => v.Name === "Unknown");

      const inventoryItemVariance = this.scope.session.create("InventoryItemVariance") as InventoryItemVariance;
      inventoryItemVariance.Quantity = this.actualQuantityOnHand - this.good.QuantityOnHand;
      inventoryItemVariance.Reason = reason;

      this.inventoryItem.AddInventoryItemVariance(inventoryItemVariance);
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

  public localisedName(productCharacteristic: ProductCharacteristic): string {
    const localisedText: LocalisedText = productCharacteristic.LocalisedNames.find((v: LocalisedText) => v.Locale === this.locale);
    if (localisedText) {
      return localisedText.Text;
    }

    return productCharacteristic.Name;
  }

  public setProductCharacteristicValues(): void {
    this.productCharacteristicValues = this.inventoryItem.ProductCharacteristicValues.filter((v: ProductCharacteristicValue) => v.Locale === this.locale);
  }

  get locale(): Locale {
    return this.locales.find((v: Locale) => v.Name === this.selectedLocaleName);
  }

  public brandSelected(brand: Brand): void {

    const fetch: Fetch[] = [
      new Fetch(
        {
          id: brand.id,
          include: [new TreeNode({ roleType: this.m.Brand.Models })],
          name: "selectedbrand",
        }),
    ];

    this.scope
      .load("Pull", new PullRequest({ fetch }))
      .subscribe((loaded: Loaded) => {

        const selectedbrand = loaded.objects.selectedbrand as Brand;
        this.models = selectedbrand.Models;
      },
      (error: Error) => {
        this.errorService.message(error);
        this.goBack();
      },
    );
  }
}