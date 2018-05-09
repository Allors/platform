import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { TdDialogService, TdMediaService } from "@covalent/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import "rxjs/add/observable/combineLatest";
import { ErrorService, FilterFactory, Loaded, Saved, Scope, WorkspaceService } from "../../../../../angular";
import { Facility, Good, InventoryItem, InvoiceItemType, NonSerialisedInventoryItem, Product, SalesInvoice, SalesInvoiceItem, SalesOrderItem, SerialisedInventoryItem, VatRate, VatRegime } from "../../../../../domain";
import { And, ContainedIn, Equals, Fetch, Path, PullRequest, Query, TreeNode } from "../../../../../framework";
import { MetaDomain } from "../../../../../meta";
import { StateService } from "../../../services/StateService";

@Component({
  templateUrl: "./invoiceitem.component.html",
})
export class InvoiceItemEditComponent
  implements OnInit, OnDestroy {
  public m: MetaDomain;

  public title: string = "Edit Sales Invoice Item";
  public subTitle: string;
  public invoice: SalesInvoice;
  public invoiceItem: SalesInvoiceItem;
  public orderItem: SalesOrderItem;
  public inventoryItems: InventoryItem[];
  public vatRates: VatRate[];
  public vatRegimes: VatRegime[];
  public serialisedInventoryItem: SerialisedInventoryItem;
  public nonSerialisedInventoryItem: NonSerialisedInventoryItem;
  public goods: Good[];
  public invoiceItemTypes: InvoiceItemType[];
  public productItemType: InvoiceItemType;
  public facilities: Facility[];
  public goodsFacilityFilter: FilterFactory;

  private refresh$: BehaviorSubject<Date>;
  private subscription: Subscription;
  private scope: Scope;

  constructor(
    private workspaceService: WorkspaceService,
    private errorService: ErrorService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialogService: TdDialogService,
    private changeDetectorRef: ChangeDetectorRef,
    public stateService: StateService,
    public media: TdMediaService,
  ) {
    this.m = this.workspaceService.metaPopulation.metaDomain;
    this.scope = this.workspaceService.createScope();
    this.refresh$ = new BehaviorSubject<Date>(undefined);
    this.goodsFacilityFilter = new FilterFactory({
      objectType: this.m.Good,
      roleTypes: [this.m.Good.Name],
      post: (predicate: And) => {
          const query = new Query({
              objectType: this.m.VendorProduct,
              predicate: new Equals({ roleType: this.m.VendorProduct.InternalOrganisation, value: this.stateService.internalOrganisationId }),
          });

          predicate.predicates.push(new ContainedIn({ associationType: this.m.Product.VendorProductsWhereProduct, query }));
      },
    });
}

  public ngOnInit(): void {

    this.subscription = Observable.combineLatest(this.route.url, this.refresh$)
      .switchMap(([urlSegments, date]) => {
        const id: string = this.route.snapshot.paramMap.get("id");
        const itemId: string = this.route.snapshot.paramMap.get("itemId");
        const m: MetaDomain = this.m;

        const fetches: Fetch[] = [
          new Fetch({
            id,
            include: [
              new TreeNode({ roleType: m.SalesInvoice.VatRegime }),
            ],
            name: "salesInvoice",
          }),
          new Fetch({
            id: itemId,
            include: [
              new TreeNode({
                roleType: m.SalesInvoiceItem.SalesInvoiceItemState,
              }),
              new TreeNode({
                nodes: [new TreeNode({ roleType: m.Facility.Owner })],
                roleType: m.SalesInvoiceItem.Facility,
              }),
              new TreeNode({
                nodes: [new TreeNode({ roleType: m.VatRegime.VatRate })],
                roleType: m.SalesInvoiceItem.VatRegime,
              }),
            ],
            name: "invoiceItem",
          }),
        ];

        const queries: Query[] = [
          new Query({
            name: "goods",
            objectType: m.Good,
          }),
          new Query({
            name: "invoiceItemTypes",
            objectType: m.InvoiceItemType,
          }),
          new Query({
            name: "vatRates",
            objectType: m.VatRate,
          }),
          new Query({
            name: "vatRegimes",
            objectType: m.VatRegime,
          }),
          new Query({
            include: [ new TreeNode({ roleType: m.Facility.Owner }) ],
            name: "facilities",
            objectType: m.Facility,
          }),
        ];

        return this.scope.load("Pull", new PullRequest({ fetches, queries }));
      })
      .subscribe((loaded) => {
          this.scope.session.reset();

          this.invoice = loaded.objects.salesInvoice as SalesInvoice;
          this.invoiceItem = loaded.objects.invoiceItem as SalesInvoiceItem;
          this.orderItem = loaded.objects.orderItem as SalesOrderItem;
          this.goods = loaded.collections.goods as Good[];
          this.vatRates = loaded.collections.vatRates as VatRate[];
          this.vatRegimes = loaded.collections.vatRegimes as VatRegime[];
          this.facilities = loaded.collections.facilities as Facility[];
          this.invoiceItemTypes = loaded.collections.invoiceItemTypes as InvoiceItemType[];
          this.productItemType = this.invoiceItemTypes.find(
            (v: InvoiceItemType) =>
              v.UniqueId.toUpperCase() ===
              "0D07F778-2735-44CB-8354-FB887ADA42AD",
          );

          if (!this.invoiceItem) {
            this.title = "Add invoice Item";
            this.invoiceItem = this.scope.session.create("SalesInvoiceItem") as SalesInvoiceItem;
            this.invoice.AddSalesInvoiceItem(this.invoiceItem);
          } else {
            if (this.invoiceItem.InvoiceItemType === this.productItemType) {
              this.goodSelected(this.invoiceItem.Product);
            }
          }
        },
        (error: Error) => {
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

  public goodSelected(product: Product): void {
    this.invoiceItem.InvoiceItemType = this.productItemType;

    const fetches: Fetch[] = [
      new Fetch({
        id: product.id,
        name: "inventoryItem",
        path: new Path({ step: this.m.Good.InventoryItemsWhereGood }),
      }),
    ];

    this.scope.load("Pull", new PullRequest({ fetches })).subscribe(
      (loaded) => {
        this.inventoryItems = loaded.collections
          .inventoryItem as InventoryItem[];
        if (this.inventoryItems[0].objectType.name === "SerialisedInventoryItem") {
          this.serialisedInventoryItem = this
            .inventoryItems[0] as SerialisedInventoryItem;
        }
        if (this.inventoryItems[0].objectType.name === "NonSerialisedInventoryItem") {
          this.nonSerialisedInventoryItem = this
            .inventoryItems[0] as NonSerialisedInventoryItem;
        }
      },
      (error: Error) => {
        this.errorService.message(error);
        this.goBack();
      },
    );
  }

  public facilitySelected(facility: Facility): void {

    if (facility !== undefined) {
      this.goodsFacilityFilter = new FilterFactory({
        objectType: this.m.Good,
        roleTypes: [this.m.Good.Name],
        post: (predicate: And) => {
            const query = new Query({
                objectType: this.m.VendorProduct,
                predicate: new Equals({ roleType: this.m.VendorProduct.InternalOrganisation, value: facility.Owner }),
            });

            predicate.predicates.push(new ContainedIn({ associationType: this.m.Product.VendorProductsWhereProduct, query }));
        },
      });
    }
  }

  public save(): void {
    this.scope.save().subscribe(
      (saved: Saved) => {
        this.router.navigate(["/accountsreceivable/invoice/" + this.invoice.id]);
      },
      (error: Error) => {
        this.errorService.dialog(error);
      },
    );
  }

  public update(): void {

    this.scope
      .save()
      .subscribe((saved: Saved) => {
        const newid = this.invoiceItem.id;
        this.scope.session.reset();
        this.router.navigate(["/accountsreceivable/invoice/" + this.invoice.id + "/item/" + newid]);
      },
      (error: Error) => {
        this.errorService.dialog(error);
      });
  }

  public refresh(): void {
    this.refresh$.next(new Date());
  }

  public goBack(): void {
    window.history.back();
  }
}
