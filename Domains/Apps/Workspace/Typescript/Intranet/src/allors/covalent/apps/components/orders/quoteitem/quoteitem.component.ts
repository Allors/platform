import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router, UrlSegment } from "@angular/router";
import { TdDialogService, TdMediaService } from "@covalent/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import "rxjs/add/observable/combineLatest";

import { ErrorService, Field, Filter, Invoked, Loaded, Saved, Scope, WorkspaceService } from "../../../../../angular";
import { Good, InventoryItem, NonSerialisedInventoryItem, Product, ProductQuote, QuoteItem, RequestItem, SerialisedInventoryItem, UnitOfMeasure } from "../../../../../domain";
import { Fetch, Path, PullRequest, Query, Sort, TreeNode } from "../../../../../framework";
import { MetaDomain } from "../../../../../meta";

@Component({
  templateUrl: "./quoteitem.component.html",
})
export class QuoteItemEditComponent implements OnInit, OnDestroy {

  public m: MetaDomain;

  public title: string = "Edit Quote Item";
  public subTitle: string;
  public quote: ProductQuote;
  public quoteItem: QuoteItem;
  public requestItem: RequestItem;
  public inventoryItems: InventoryItem[];
  public serialisedInventoryItem: SerialisedInventoryItem;
  public nonSerialisedInventoryItem: NonSerialisedInventoryItem;
  public goods: Good[];
  public unitsOfMeasure: UnitOfMeasure[];

  public goodsFilter: Filter;

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
    public media: TdMediaService, private changeDetectorRef: ChangeDetectorRef) {
    this.m = this.workspaceService.metaPopulation.metaDomain;

    this.scope = this.workspaceService.createScope();
    this.refresh$ = new BehaviorSubject<Date>(undefined);
    this.goodsFilter = new Filter({scope: this.scope, objectType: this.m.Good, roleTypes: [this.m.Good.Name]});
  }

  public ngOnInit(): void {

    this.subscription = Observable.combineLatest(this.route.url, this.refresh$)
      .switchMap(([urlSegments, date]) => {

        const id: string = this.route.snapshot.paramMap.get("id");
        const itemId: string = this.route.snapshot.paramMap.get("itemId");
        const m: MetaDomain = this.m;

        const fetch: Fetch[] = [
          new Fetch({
            id,
            name: "productQuote",
          }),
          new Fetch({
            id: itemId,
            include: [
              new TreeNode({ roleType: m.QuoteItem.QuoteItemState }),
              new TreeNode({ roleType: m.QuoteItem.RequestItem }),
            ],
            name: "quoteItem",
          }),
          new Fetch({
            id: itemId,
            name: "requestItem",
            path: new Path({ step: m.QuoteItem.RequestItem }),
          }),
        ];

        const query: Query[] = [
          new Query(
            {
              name: "goods",
              objectType: m.Good,
              sort: [new Sort({ roleType: m.Good.Name, direction: "Asc" })],
            }),
            new Query(
              {
                name: "unitsOfMeasure",
                objectType: m.UnitOfMeasure,
              }),
          ];

        return this.scope
          .load("Pull", new PullRequest({ fetch, query }));
      })
      .subscribe((loaded) => {
        this.scope.session.reset();
        this.quote = loaded.objects.productQuote as ProductQuote;
        this.quoteItem = loaded.objects.quoteItem as QuoteItem;
        this.requestItem = loaded.objects.requestItem as RequestItem;
        this.goods = loaded.collections.goods as Good[];
        this.unitsOfMeasure = loaded.collections.unitsOfMeasure as UnitOfMeasure[];
        const piece = this.unitsOfMeasure.find((v: UnitOfMeasure) => v.UniqueId.toUpperCase() === "F4BBDB52-3441-4768-92D4-729C6C5D6F1B");

        if (!this.quoteItem) {
          this.title = "Add Quote Item";
          this.quoteItem = this.scope.session.create("QuoteItem") as QuoteItem;
          this.quoteItem.UnitOfMeasure = piece;
          this.quote.AddQuoteItem(this.quoteItem);
        } else {
          this.update(this.quoteItem.Product);
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

  public goodSelected(object: any) {
    if (object) {
      this.update(object as Product);
    }
  }

  public submit(): void {
    const submitFn: () => void = () => {
      this.scope.invoke(this.quoteItem.Submit)
        .subscribe((invoked: Invoked) => {
          this.refresh();
          this.snackBar.open("Successfully submitted.", "close", { duration: 5000 });
        },
        (error: Error) => {
          this.errorService.dialog(error);
        });
    };

    if (this.scope.session.hasChanges) {
      this.dialogService
        .openConfirm({ message: "Save changes?" })
        .afterClosed().subscribe((confirm: boolean) => {
          if (confirm) {
            this.scope
              .save()
              .subscribe((saved: Saved) => {
                this.scope.session.reset();
                submitFn();
              },
              (error: Error) => {
                this.errorService.dialog(error);
              });
          } else {
            submitFn();
          }
        });
    } else {
      submitFn();
    }
  }

  public cancel(): void {
    const cancelFn: () => void = () => {
      this.scope.invoke(this.quoteItem.Cancel)
        .subscribe((invoked: Invoked) => {
          this.refresh();
          this.snackBar.open("Successfully cancelled.", "close", { duration: 5000 });
        },
        (error: Error) => {
          this.errorService.dialog(error);
        });
    };

    if (this.scope.session.hasChanges) {
      this.dialogService
        .openConfirm({ message: "Save changes?" })
        .afterClosed().subscribe((confirm: boolean) => {
          if (confirm) {
            this.scope
              .save()
              .subscribe((saved: Saved) => {
                this.scope.session.reset();
                cancelFn();
              },
              (error: Error) => {
                this.errorService.dialog(error);
              });
          } else {
            cancelFn();
          }
        });
    } else {
      cancelFn();
    }
  }

  public save(): void {

    this.scope
      .save()
      .subscribe((saved: Saved) => {
        this.router.navigate(["/orders/productQuote/" + this.quote.id]);
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

  private update(product: Product) {

    const fetch: Fetch[] = [
      new Fetch({
        id: product.id,
        name: "inventoryItem",
        path: new Path({ step: this.m.Good.InventoryItemsWhereGood }),
      }),
    ];

    this.scope
        .load("Pull", new PullRequest({ fetch }))
        .subscribe((loaded) => {
          this.inventoryItems = loaded.collections.inventoryItem as InventoryItem[];
          if (this.inventoryItems[0] instanceof SerialisedInventoryItem) {
            this.serialisedInventoryItem = this.inventoryItems[0] as SerialisedInventoryItem;
          }
          if (this.inventoryItems[0] instanceof NonSerialisedInventoryItem) {
            this.nonSerialisedInventoryItem = this.inventoryItems[0] as NonSerialisedInventoryItem;
          }
        },
        (error: Error) => {
          this.errorService.message(error);
          this.goBack();
        },
      );
  }
}