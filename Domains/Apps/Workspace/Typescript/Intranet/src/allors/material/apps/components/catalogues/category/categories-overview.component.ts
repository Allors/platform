import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/observable/combineLatest';

import { ErrorService, Invoked, Loaded, MediaService, Scope, WorkspaceService } from '../../../../../angular';
import { InternalOrganisation, ProductCategory } from '../../../../../domain';
import { And, Equals, Like, Page, Predicate, PullRequest, Query, TreeNode } from '../../../../../framework';
import { MetaDomain } from '../../../../../meta';
import { StateService } from '../../../services/StateService';
import { AllorsMaterialDialogService } from '../../../../base/services/dialog';

interface SearchData {
  name: string;
}

@Component({
  templateUrl: './categories-overview.component.html',
})
export class CategoriesOverviewComponent implements OnDestroy {

  public title = 'Categories';
  public total: number;
  public searchForm: FormGroup;
  public data: ProductCategory[];
  public filtered: ProductCategory[];
  private refresh$: BehaviorSubject<Date>;
  private page$: BehaviorSubject<number>;

  private subscription: Subscription;
  private scope: Scope;

  constructor(
    private workspaceService: WorkspaceService,
    private errorService: ErrorService,
    private formBuilder: FormBuilder,
    private titleService: Title,
    private snackBar: MatSnackBar,
    private router: Router,
    public mediaService: MediaService,
    private dialogService: AllorsMaterialDialogService,
    private stateService: StateService) {

    this.titleService.setTitle('Categories');

    this.scope = this.workspaceService.createScope();
    this.refresh$ = new BehaviorSubject<Date>(undefined);

    this.searchForm = this.formBuilder.group({
      name: [''],
    });

    this.page$ = new BehaviorSubject<number>(50);

    const search$ = this.searchForm.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .startWith({});

    const combined$ = Observable.combineLatest(search$, this.page$, this.refresh$, this.stateService.internalOrganisationId$)
    .scan(([previousData, previousTake, previousDate, previousInternalOrganisationId], [data, take, date, internalOrganisationId]) => {
      return [
        data,
        data !== previousData ? 50 : take,
        date,
        internalOrganisationId,
      ];
    }, [] as [SearchData, number, Date, InternalOrganisation]);

    this.subscription = combined$
      .switchMap(([data, take, ,  internalOrganisationId]) => {
        const m: MetaDomain = this.workspaceService.metaPopulation.metaDomain;

        const predicate: And = new And();
        const predicates: Predicate[] = predicate.predicates;

        predicates.push(new Equals({ roleType: m.ProductCategory.InternalOrganisation, value: internalOrganisationId }));

        if (data.name) {
          const like: string = data.name.replace('*', '%') + '%';
          predicates.push(new Like({ roleType: m.ProductCategory.Name, value: like }));
        }

        const queries: Query[] = [new Query(
          {
            include: [
              new TreeNode({ roleType: m.ProductCategory.CategoryImage }),
              new TreeNode({ roleType: m.ProductCategory.LocalisedNames }),
              new TreeNode({ roleType: m.ProductCategory.LocalisedDescriptions }),
            ],
            name: 'categories',
            objectType: m.ProductCategory,
            page: new Page({ skip: 0, take }),
            predicate,
          })];

        return this.scope.load('Pull', new PullRequest({ queries }));

      })
      .subscribe((loaded) => {
        this.data = loaded.collections.categories as ProductCategory[];
        this.total = loaded.values.categories_total;
      },
      (error: any) => {
        this.errorService.handle(error);
        this.goBack();
      });
  }

  public more(): void {
    this.page$.next(this.data.length + 50);
  }

  public goBack(): void {
    window.history.back();
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public refresh(): void {
    this.refresh$.next(new Date());
  }

  public delete(category: ProductCategory): void {
      this.dialogService
      .confirm({ message: 'Are you sure you want to delete this category?' })
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.scope.invoke(category.Delete)
            .subscribe((invoked: Invoked) => {
              this.snackBar.open('Successfully deleted.', 'close', { duration: 5000 });
              this.refresh();
            },
            (error: Error) => {
              this.errorService.handle(error);
            });
        }
      });
  }

  public onView(category: ProductCategory): void {
    this.router.navigate(['/category/' + category.id]);
  }
}