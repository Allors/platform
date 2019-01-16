import { Component, Self, OnInit, HostBinding } from '@angular/core';
import { NavigationService, Action, PanelService, RefreshService, ErrorService, MetaService } from '../../../../../../angular';
import { WorkEffort } from '../../../../../../domain';
import { Meta } from '../../../../../../meta';
import { DeleteService, TableRow, Table, OverviewService, CreateData } from '../../../../..';
import * as moment from 'moment';

interface Row extends TableRow {
  object: WorkEffort;
  number: string;
  name: string;
  status: string;
  customer: string;
  lastModifiedDate: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'worktask-overview-panel',
  templateUrl: './worktask-overview-panel.component.html',
  providers: [PanelService]
})
export class WorkTaskOverviewPanelComponent implements OnInit {

  @HostBinding('class.expanded-panel') get expandedPanelClass() {
    return this.panel.isExpanded;
  }

  m: Meta;

  objects: WorkEffort[] = [];

  delete: Action;
  table: Table<TableRow>;

  get createData(): CreateData {
    return {
      associationId: this.panel.manager.id,
      associationObjectType: this.panel.manager.objectType,
    };
  }

  constructor(
    @Self() public panel: PanelService,
    public metaService: MetaService,
    public refreshService: RefreshService,
    public navigation: NavigationService,
    public overviewService: OverviewService,
    public errorService: ErrorService,
    public deleteService: DeleteService) {

    this.m = this.metaService.m;
  }

  ngOnInit() {

    this.delete = this.deleteService.delete(this.panel.manager.context);

    this.panel.name = 'workeffort';
    this.panel.title = 'Work Efforts';
    this.panel.icon = 'work';
    this.panel.expandable = true;

    const sort = true;
    this.table = new Table({
      selection: true,
      columns: [
        { name: 'number', sort },
        { name: 'name', sort },
        { name: 'status', sort },
        { name: 'customer', sort },
        { name: 'lastModifiedDate', sort },
      ],
      actions: [
        this.overviewService.overview(),
        this.delete,
      ],
      defaultAction: this.overviewService.overview(),
      autoSort: true
    });

    const customerPullName = `${this.panel.name}_${this.m.WorkEffort.name}_customer`;
    const contactPullName = `${this.panel.name}_${this.m.WorkEffort.name}_contact`;
    const assetPullName = `${this.panel.name}_${this.m.WorkEffort.name}_fixedasset`;

    this.panel.onPull = (pulls) => {
      const { pull, x } = this.metaService;

      const id = this.panel.manager.id;

      pulls.push(
        pull.Party({
          name: customerPullName,
          object: id,
          fetch: {
            WorkEffortsWhereCustomer: {
              include: {
                WorkEffortState: x,
                Customer: x
              }
            }
          }
        }),
        pull.Person({
          name: contactPullName,
          object: id,
          fetch: {
            WorkEffortsWhereContactPerson: {
              include: {
                WorkEffortState: x,
                Customer: x
              }
            }
          }
        }),
        pull.SerialisedItem({
          name: assetPullName,
          object: id,
          fetch: {
            WorkEffortFixedAssetAssignmentsWhereFixedAsset: {
              Assignment: {
                include: {
                  WorkEffortState: x,
                  Customer: x
                }
              }
            }
          }
        }),
      );
    };

    this.panel.onPulled = (loaded) => {

      const fromCustomer = loaded.collections[customerPullName] as WorkEffort[];
      const fromContact = loaded.collections[contactPullName] as WorkEffort[];
      const fromAsset = loaded.collections[assetPullName] as WorkEffort[];

      if (fromCustomer !== undefined && fromCustomer.length > 0) {
        this.objects = fromCustomer;
      }

      if (fromContact !== undefined && fromContact.length > 0) {
        this.objects = fromContact;
      }

      if (fromAsset !== undefined && fromAsset.length > 0) {
        this.objects = fromAsset;
      }

      if (this.objects) {
        this.table.total = this.objects.length;
        this.table.data = this.objects.map((v) => {
          return {
            object: v,
            number: v.WorkEffortNumber,
            name: v.Name,
            customer: v.Customer.displayName,
            status: v.WorkEffortState ? v.WorkEffortState.Name : '',
            lastModifiedDate: moment(v.LastModifiedDate).fromNow()
          } as Row;
        });
      }
    };
  }
}
