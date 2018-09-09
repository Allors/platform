import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ErrorService, Loaded, Scope, WorkspaceService } from '../../../../angular';
import { Organisation } from '../../../../domain';
import { MetaDomain, PullFactory } from '../../../../meta';
import { PullRequest } from '../../../../framework';

@Component({
  templateUrl: './organisations.component.html',
})
export class OrganisationsComponent implements AfterViewInit, OnDestroy {

  public title: string;

  public m: MetaDomain;
  public data: Organisation[];

  private subscription: Subscription;
  private scope: Scope;

  constructor(
    private workspaceService: WorkspaceService,
    private titleService: Title,
    private router: Router) {

      this.title = 'Organisations';
      this.titleService.setTitle(this.title);
      this.scope = this.workspaceService.createScope();
      this.m = this.workspaceService.metaPopulation.metaDomain;
    }

  public goBack(): void {
    this.router.navigate(['/']);
  }

  public ngAfterViewInit(): void {
    this.search();
  }

  public ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public search(): void {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    const x = {};
    const pull = new PullFactory(this.workspaceService.metaPopulation);

    const pulls = [
      pull.Organisation({
        include: {
          Owner: x,
          Employees: x,
      }})
    ];

    this.scope.session.reset();

    this.subscription = this.scope
      .load('Pull', new PullRequest({ pulls }))
      .subscribe((loaded: Loaded) => {
        this.data = loaded.collections.Organisations as Organisation[];
      },
      (error: any) => {
        alert(error);
        this.goBack();
      });
  }

  public delete(): void {
/*     this.dialogService
      .openConfirm({ message: 'Are you sure you want to delete this organisation?' })
      .afterClosed().subscribe((confirm: boolean) => {
        if (confirm) {
          // TODO: Logical, physical or workflow delete
        }
      }); */
  }

  public onView(organisation: Organisation): void {
    this.router.navigate(['/relations/organisations/' + organisation.id + '/overview']);
  }
}
