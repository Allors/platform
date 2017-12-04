import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy
} from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatDialog, MatSnackBar } from "@angular/material";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/observable/combineLatest";

import { TdDialogService, TdMediaService } from "@covalent/core";

import {
  And,
  ContainedIn,
  Contains,
  Equals,
  Like,
  Page,
  Predicate,
  PullRequest,
  Query,
  Sort,
  TreeNode
} from "@allors/framework";
import {
  MetaDomain,
  Brand,
  Good,
  InventoryItemKind,
  Model,
  Organisation,
  OrganisationRole,
  Ownership,
  ProductCategory,
  ProductType,
  SerialisedInventoryItemState
} from "@allors/workspace";
import {
  ErrorService,
  Loaded,
  Scope,
  WorkspaceService
} from "@allors/base-angular";

import { NewGoodDialogComponent } from "../../catalogues/good/newgood-dialog.module";

interface SearchData {
  name: string;
  articleNumber: string;
  productCategory: string;
  productType: string;
  brand: string;
  model: string;
  status: string;
  ownership: string;
  inventoryItemKind: string;
  supplier: string;
  manufacturer: string;
  owner: string;
  keyword: string;
}

@Component({
  template: `
<mat-toolbar>
  <div layout="row" layout-align="start center" flex>
    <button mat-icon-button tdLayoutManageListOpen [hideWhenOpened]="true" style="display: none">
          <mat-icon>arrow_back</mat-icon>
        </button>
    <span>{{title}}</span>
    <span flex></span>
    <button mat-icon-button><mat-icon>settings</mat-icon></button>
  </div>
</mat-toolbar>

<mat-card>
  <div class="pad-top-xs pad-left pad-right">
    <form novalidate [formGroup]="searchForm">
    <div class="grid-8_xs-1">
        <mat-input-container class="col">
          <input matInput placeholder="Name" formControlName="name">
        </mat-input-container>
        <mat-input-container class="col">
          <input matInput placeholder="ArticleNr" formControlName="articleNumber">
        </mat-input-container>
        <mat-input-container class="col">
          <input matInput placeholder="Keyword" formControlName="keyword">
        </mat-input-container>
        <mat-input-container class="col">
          <input matInput placeholder="Owner" formControlName="owner">
          <mat-icon matSuffix>search</mat-icon>
        </mat-input-container>
        </div>
        <div class="grid-8_xs-1">
        <mat-input-container class="col">
          <mat-select formControlName="ownership" name="ownership" [(ngModel)]="selectedOwnership" placeholder="Ownership" >
          <mat-option>None</mat-option>
            <mat-option *ngFor="let ownership of ownerships" [value]="ownership.Name">{{ ownership.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
        <mat-input-container class="col">
          <mat-select formControlName="brand" name="brand" [(ngModel)]="selectedBrand" placeholder="Brand">
            <mat-option>None</mat-option>
            <mat-option *ngFor="let brand of brands" [value]="brand.Name">{{ brand.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
        <mat-input-container class="col">
          <mat-select formControlName="model" name="model" [(ngModel)]="selectedModel" placeholder="Model">
            <mat-option>None</mat-option>
            <mat-option *ngFor="let model of models" [value]="model.Name">{{ model.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
        <mat-input-container class="col">
          <mat-select formControlName="productCategory" name="productCategory" [(ngModel)]="selectedProductCategory" placeholder="Category">
            <mat-option>None</mat-option>
            <mat-option *ngFor="let productCategory of productCategories" [value]="productCategory.Name">{{ productCategory.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
        <mat-input-container class="col">
          <mat-select formControlName="productType" name="productType" [(ngModel)]="selectedProductType" placeholder="Product Type">
            <mat-option>None</mat-option>
            <mat-option *ngFor="let productType of productTypes" [value]="productType.Name">{{ productType.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
        <mat-input-container class="col">
          <mat-select formControlName="inventoryItemKind" name="inventoryItemKind" [(ngModel)]="selectedInventoryItemKind" placeholder="Inventory Kind">
            <mat-option>None</mat-option>
            <mat-option *ngFor="let inventoryItemKind of inventoryItemKinds" [value]="inventoryItemKind.Name">{{ inventoryItemKind.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
        <mat-input-container class="col">
          <mat-select formControlName="manufacturer" name="manufacturer" [(ngModel)]="selectedManufacturer" placeholder="Manufacturer">
            <mat-option>None</mat-option>
            <mat-option *ngFor="let manufacturer of manufacturers" [value]="manufacturer.Name">{{ manufacturer.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
        <mat-input-container class="col">
          <mat-select formControlName="supplier" name="supplier" [(ngModel)]="selectedSupplier" placeholder="Supplier">
            <mat-option>None</mat-option>
            <mat-option *ngFor="let supplier of suppliers" [value]="supplier.Name">{{ supplier.Name }}</mat-option>
          </mat-select>
        </mat-input-container>
      </div>
      </form>
  </div>

  <mat-divider></mat-divider>

  <ng-template tdLoading="data">
    <mat-list class="will-load">
      <div class="mat-padding" *ngIf="data && data.length === 0" layout="row" layout-align="center center">
        <h3>No products to display.</h3>
      </div>
      <ng-template let-good let-last="last" ngFor [ngForOf]="data">
        <mat-list-item>

          <mat-icon *ngIf="!good.PrimaryPhoto" mat-list-avatar>photo_camera</mat-icon>
          <img *ngIf="good.PrimaryPhoto" mat-list-avatar  src="http://localhost:5000/Media/Download/{{good.PrimaryPhoto.UniqueId}}?revision={{good.PrimaryPhoto.Revision}}"/>

          <h3 *ngIf="serialisedGood(good)" mat-line [routerLink]="'/serialisedGood/' + [good.id]"> {{good.Name}}</h3>
          <h3 *ngIf="!serialisedGood(good)" mat-line [routerLink]="'/nonSerialisedGood/' + [good.id]"> {{good.Name}}</h3>
          <p mat-line class="mat-caption">{{ good.Description }} </p>
          <p mat-line class="mat-caption">Primary category: {{ good.PrimaryProductCategory?.Name }} </p>

          <span>
                <button mat-icon-button [mat-menu-trigger-for]="menu">
                <mat-icon>more_vert</mat-icon>
                </button>
                <mat-menu x-position="before" #menu="matMenu">
                <a *ngIf="serialisedGood(good)" [routerLink]="'/serialisedGood/' + [good.id]" mat-menu-item>Edit</a>
                <a *ngIf="!serialisedGood(good)" [routerLink]="'/nonSerialisedGood/' + [good.id]" mat-menu-item>Edit</a>
                <button mat-menu-item (click)="delete(good)">Delete</button>
                </mat-menu>
              </span>

        </mat-list-item>
        <mat-divider *ngIf="!last" mat-inset></mat-divider>
      </ng-template>
    </mat-list>
  </ng-template>
</mat-card>

<mat-card body tdMediaToggle="gt-xs" [mediaClasses]="['push']" *ngIf="this.data && this.data.length !== total">
  <mat-card-content>
    <button mat-button (click)="more()">More</button> {{this.data?.length}}/{{total}}
  </mat-card-content>
</mat-card>

<span flex>
  <a mat-fab color="accent" class="mat-fab-bottom-right fixed" (click)="addGood()">
    <mat-icon>add</mat-icon>
  </a>
</span>
`
})
export class GoodsOverviewComponent implements AfterViewInit, OnDestroy {
  public title: string = "Products";
  public total: number;
  public searchForm: FormGroup;
  public data: Good[];
  public filtered: Good[];
  public chosenGood: string;

  public productCategories: ProductCategory[];
  public selectedProductCategory: ProductCategory;
  public productCategory: ProductCategory;

  public productTypes: ProductType[];
  public selectedProductType: ProductType;
  public productType: ProductType;

  public brands: Brand[];
  public selectedBrand: Brand;
  public brand: Brand;

  public models: Model[];
  public selectedModel: Model;
  public model: Model;

  public objectStates: SerialisedInventoryItemState[];
  public selectedObjectState: Model;
  public objectState: Model;

  public ownerships: Ownership[];
  public selectedOwnership: Ownership;
  public ownership: Ownership;

  public inventoryItemKinds: InventoryItemKind[];
  public selectedInventoryItemKind: InventoryItemKind;
  public inventoryItemKind: InventoryItemKind;

  public suppliers: Organisation[];
  public selectedSupplier: Organisation;
  public supplier: Organisation;

  public manufacturers: Organisation[];
  public selectedManufacturer: Organisation;
  public manufacturer: Organisation;

  private refresh$: BehaviorSubject<Date>;
  private page$: BehaviorSubject<number>;

  private subscription: Subscription;
  private scope: Scope;

  constructor(
    private workspaceService: WorkspaceService,
    private errorService: ErrorService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialogService: TdDialogService,
    public media: TdMediaService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.titleService.setTitle("Products");

    this.scope = this.workspaceService.createScope();
    this.refresh$ = new BehaviorSubject<Date>(undefined);
    this.chosenGood = "Serialised";

    this.searchForm = this.formBuilder.group({
      articleNumber: [""],
      brand: [""],
      inventoryItemKind: [""],
      keyword: [""],
      manufacturer: [""],
      model: [""],
      name: [""],
      owner: [""],
      ownership: [""],
      productCategory: [""],
      productType: [""],
      supplier: [""]
    });

    this.page$ = new BehaviorSubject<number>(50);

    const search$: Observable<SearchData> = this.searchForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .startWith({});

    const combined$: Observable<any> = Observable.combineLatest(
      search$,
      this.page$,
      this.refresh$
    ).scan(
      (
        [previousData, previousTake, previousDate]: [SearchData, number, Date],
        [data, take, date]: [SearchData, number, Date]
      ): [SearchData, number, Date] => {
        return [data, data !== previousData ? 50 : take, date];
      },
      [] as [SearchData, number, Date],
    );

    const m: MetaDomain = this.workspaceService.metaPopulation.metaDomain;

    this.subscription = combined$
      .switchMap(([data, take]: [SearchData, number]) => {
        const rolesQuery: Query[] = [
          new Query({
            name: "organisationRoles",
            objectType: m.OrganisationRole
          }),
        ];

        return this.scope
          .load("Pull", new PullRequest({ query: rolesQuery }))
          .switchMap((rolesLoaded: Loaded) => {
            const organisationRoles: OrganisationRole[] = rolesLoaded
              .collections.organisationRoles as OrganisationRole[];
            const manufacturerRole: OrganisationRole = organisationRoles.find(
              (v: OrganisationRole) => v.Name === "Manufacturer",
            );
            const supplierRole: OrganisationRole = organisationRoles.find(
              (v: OrganisationRole) => v.Name === "Supplier",
            );

            const searchQuery: Query[] = [
              new Query({
                name: "brands",
                objectType: m.Brand,
              }),
              new Query({
                name: "models",
                objectType: m.Model,
              }),
              new Query({
                name: "inventoryItemKinds",
                objectType: m.InventoryItemKind,
              }),
              new Query({
                name: "categories",
                objectType: m.ProductCategory,
              }),
              new Query({
                name: "productTypes",
                objectType: m.ProductType,
              }),
              new Query({
                name: "organisations",
                objectType: m.ProductType,
              }),
              new Query({
                name: "ownerships",
                objectType: m.Ownership,
              }),
              new Query({
                name: "manufacturers",
                objectType: m.Organisation,
                predicate: new Contains({
                  roleType: m.Organisation.OrganisationRoles,
                  object: manufacturerRole,
                }),
                sort: [
                  new Sort({ roleType: m.Organisation.Name, direction: "Asc" }),
                ],
              }),
              new Query({
                name: "suppliers",
                objectType: m.Organisation,
                predicate: new Contains({
                  roleType: m.Organisation.OrganisationRoles,
                  object: supplierRole,
                }),
                sort: [
                  new Sort({ roleType: m.Organisation.Name, direction: "Asc" }),
                ],
              }),
            ];

            return this.scope
              .load("Pull", new PullRequest({ query: searchQuery }))
              .switchMap((loaded: Loaded) => {
                this.brands = loaded.collections.brands as Brand[];
                this.brand = this.brands.find(
                  (v: Brand) => v.Name === data.brand,
                );

                this.models = loaded.collections.models as Model[];
                this.model = this.models.find(
                  (v: Model) => v.Name === data.model,
                );

                this.inventoryItemKinds = loaded.collections
                  .inventoryItemKinds as InventoryItemKind[];
                this.inventoryItemKind = this.inventoryItemKinds.find(
                  (v: InventoryItemKind) => v.Name === data.inventoryItemKind,
                );

                this.productCategories = loaded.collections
                  .categories as ProductCategory[];
                this.productCategory = this.productCategories.find(
                  (v: ProductCategory) => v.Name === data.productCategory,
                );

                this.productTypes = loaded.collections
                  .productTypes as ProductType[];
                this.productType = this.productTypes.find(
                  (v: ProductType) => v.Name === data.productType,
                );

                this.ownerships = loaded.collections.ownerships as Ownership[];
                this.ownership = this.ownerships.find(
                  (v: Ownership) => v.Name === data.ownership,
                );

                this.manufacturers = loaded.collections
                  .manufacturers as Organisation[];
                this.manufacturer = this.manufacturers.find(
                  (v: Organisation) => v.Name === data.manufacturer,
                );

                this.suppliers = loaded.collections.suppliers as Organisation[];
                this.supplier = this.suppliers.find(
                  (v: Organisation) => v.Name === data.supplier,
                );

                const goodsPredicate: And = new And();
                const goodsPredicates: Predicate[] = goodsPredicate.predicates;

                if (data.name) {
                  const like: string = data.name.replace("*", "%") + "%";
                  goodsPredicates.push(
                    new Like({ roleType: m.Good.Name, value: like }),
                  );
                }

                if (data.articleNumber) {
                  const like: string =
                    data.articleNumber.replace("*", "%") + "%";
                  goodsPredicates.push(
                    new Like({ roleType: m.Good.ArticleNumber, value: like }),
                  );
                }

                if (data.keyword) {
                  const like: string = data.keyword.replace("*", "%") + "%";
                  goodsPredicates.push(
                    new Like({ roleType: m.Good.Keywords, value: like }),
                  );
                }

                if (data.brand) {
                  goodsPredicates.push(
                    new Contains({
                      roleType: m.Good.StandardFeatures,
                      object: this.brand,
                    }),
                  );
                }

                if (data.model) {
                  goodsPredicates.push(
                    new Contains({
                      roleType: m.Good.StandardFeatures,
                      object: this.model,
                    }),
                  );
                }

                if (data.productCategory) {
                  goodsPredicates.push(
                    new Contains({
                      roleType: m.Good.ProductCategories,
                      object: this.productCategory,
                    }),
                  );
                }

                if (data.inventoryItemKind) {
                  goodsPredicates.push(
                    new Equals({
                      roleType: m.Good.InventoryItemKind,
                      value: this.inventoryItemKind,
                    }),
                  );
                }

                if (data.manufacturer) {
                  goodsPredicates.push(
                    new Equals({
                      roleType: m.Good.ManufacturedBy,
                      value: this.manufacturer,
                    }),
                  );
                }

                if (data.supplier) {
                  goodsPredicates.push(
                    new Equals({
                      roleType: m.Good.SuppliedBy,
                      value: this.supplier,
                    }),
                  );
                }

                if (data.owner || data.ownership) {
                  const inventoryPredicate: And = new And();
                  const inventoryPredicates: Predicate[] =
                    inventoryPredicate.predicates;

                  if (data.owner) {
                    const like: string = data.owner.replace("*", "%") + "%";
                    inventoryPredicates.push(
                      new Like({
                        roleType: m.SerialisedInventoryItem.Owner,
                        value: like,
                      }),
                    );
                  }

                  if (data.ownership) {
                    inventoryPredicates.push(
                      new Equals({
                        roleType: m.SerialisedInventoryItem.Ownership,
                        value: this.ownership,
                      }),
                    );
                  }

                  const serialisedInventoryQuery: Query = new Query({
                    objectType: m.SerialisedInventoryItem,
                    predicate: inventoryPredicate,
                  });

                  const containedIn: ContainedIn = new ContainedIn({
                    associationType: m.Good.InventoryItemsWhereGood,
                    query: serialisedInventoryQuery,
                  });
                  goodsPredicates.push(containedIn);
                }

                if (data.productType) {
                  const inventoryPredicate: And = new And();
                  const inventoryPredicates: Predicate[] =
                    inventoryPredicate.predicates;

                  if (data.productType) {
                    inventoryPredicates.push(
                      new Equals({
                        roleType: m.InventoryItem.ProductType,
                        value: this.productType,
                      }),
                    );
                  }

                  const inventoryQuery: Query = new Query({
                    objectType: m.InventoryItem,
                    predicate: inventoryPredicate,
                  });

                  const containedIn: ContainedIn = new ContainedIn({
                    associationType: m.Good.InventoryItemsWhereGood,
                    query: inventoryQuery,
                  });
                  goodsPredicates.push(containedIn);
                }

                const goodsQuery: Query[] = [
                  new Query({
                    include: [
                      new TreeNode({ roleType: m.Good.PrimaryPhoto }),
                      new TreeNode({ roleType: m.Good.LocalisedNames }),
                      new TreeNode({ roleType: m.Good.LocalisedDescriptions }),
                      new TreeNode({ roleType: m.Good.PrimaryProductCategory }),
                    ],
                    name: "goods",
                    objectType: m.Good,
                    page: new Page({ skip: 0, take }),
                    predicate: goodsPredicate,
                  }),
                ];

                return this.scope.load(
                  "Pull",
                  new PullRequest({ query: goodsQuery }),
                );
              });
          });
      })
      .subscribe(
        (loaded: Loaded) => {
          this.data = loaded.collections.goods as Good[];
          this.total = loaded.values.goods_total;
        },
        (error: any) => {
          this.errorService.message(error);
          this.goBack();
        },
      );
  }

  public more(): void {
    this.page$.next(this.data.length + 50);
  }

  public delete(good: Good): void {
    this.dialogService
      .openConfirm({ message: "Are you sure you want to delete this product?" })
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          // TODO: Logical, physical or workflow delete
        }
      });
  }

  public addGood(): void {
    const dialogRef = this.dialog.open(NewGoodDialogComponent, {
      data: { chosenGood: this.chosenGood },
      height: "300px",
      width: "700px",
    });

    dialogRef.afterClosed().subscribe((answer: string) => {
      if (answer === "Serialised") {
        this.router.navigate(["/serialisedGood"]);
      }
      if (answer === "NonSerialised") {
        this.router.navigate(["/nonSerialisedGood"]);
      }
    });
  }

  public serialisedGood(good: Good): boolean {
    return (
      good.InventoryItemKind ===
      this.inventoryItemKinds.find(
        (v: InventoryItemKind) =>
          v.UniqueId.toUpperCase() === "2596E2DD-3F5D-4588-A4A2-167D6FBE3FAE",
      )
    );
  }

  public goBack(): void {
    window.history.back();
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

  public onView(good: Good): void {
    this.router.navigate(["/good/" + good.id]);
  }
}
