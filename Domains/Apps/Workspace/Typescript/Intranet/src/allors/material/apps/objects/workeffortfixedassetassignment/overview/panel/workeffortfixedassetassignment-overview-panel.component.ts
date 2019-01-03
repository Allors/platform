import { Component, Self, OnInit } from '@angular/core';
import { NavigationService, Action, PanelService, RefreshService, ErrorService, MetaService } from '../../../../../../angular';
import { WorkEffortFixedAssetAssignment } from '../../../../../../domain';
import { Meta } from '../../../../../../meta';
import { DeleteService, TableRow, EditService, Table, OverviewService, CreateData } from '../../../../..';
import * as moment from 'moment';

interface Row extends TableRow {
  object: WorkEffortFixedAssetAssignment;
  number: string;
  name: string;
  status: string;
  from: string;
  through: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'workeffortfixedassetassignment-overview-panel',
  templateUrl: './workeffortfixedassetassignment-overview-panel.component.html',
  providers: [PanelService]
})
export class WorkEffortFixedAssetAssignmentOverviewPanelComponent implements OnInit {

  m: Meta;

  objects: WorkEffortFixedAssetAssignment[] = [];

  delete: Action;
  edit: Action;
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
    public errorService: ErrorService,
    public deleteService: DeleteService,
    public editService: EditService,
  ) {

    this.m = this.metaService.m;
  }

  ngOnInit() {

    this.delete = this.deleteService.delete(this.panel.manager.context);
    this.edit = this.editService.edit();

    this.panel.name = 'workeffortfixedassetassignment';
    this.panel.title = 'Work Efforts';
    this.panel.icon = 'work';
    this.panel.expandable = true;

    this.table = new Table({
      selection: true,
      columns: [
        { name: 'number' },
        { name: 'name' },
        { name: 'status' },
        { name: 'from' },
        { name: 'through' },
      ],
      actions: [
        this.edit,
        this.delete,
      ],
      defaultAction: this.edit,
    });

    const pullName = `${this.panel.name}_${this.m.WorkEffortFixedAssetAssignment.name}`;

    this.panel.onPull = (pulls) => {
      const { pull, x } = this.metaService;

      const id = this.panel.manager.id;

      pulls.push(
        pull.SerialisedItem({
          name: pullName,
          object: id,
          fetch: {
            WorkEffortFixedAssetAssignmentsWhereFixedAsset: {
              include: {
                Assignment: {
                  WorkEffortState: x,
                  Priority: x,
                }
              }
            }
          }
        }),
      );
    };

    this.panel.onPulled = (loaded) => {
      this.objects = loaded.collections[pullName] as WorkEffortFixedAssetAssignment[];

      if (this.objects) {
        this.table.total = this.objects.length;
        this.table.data = this.objects.map((v) => {
          return {
            object: v,
            number: v.Assignment.WorkEffortNumber,
            name: v.Assignment.Name,
            status: v.Assignment.WorkEffortState ? v.Assignment.WorkEffortState.Name : '',
            from: moment(v.FromDate).format('L'),
            through: v.ThroughDate !== null ? moment(v.ThroughDate).format('L') : '',
          } as Row;
        });
      }
    };
  }
}
