import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TdMediaService } from '@covalent/core';
import { MenuService, MenuItem } from '../../../../angular/index';

@Component({
  templateUrl: './overview.component.html',
})
export class OverviewComponent implements AfterViewInit {

  pages: MenuItem[] = [];

  constructor(public media: TdMediaService, private changeDetectorRef: ChangeDetectorRef, public menu: MenuService, public activatedRoute: ActivatedRoute) {
    this.pages = menu.pages(activatedRoute.routeConfig);
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this.changeDetectorRef.detectChanges();
  }
}
