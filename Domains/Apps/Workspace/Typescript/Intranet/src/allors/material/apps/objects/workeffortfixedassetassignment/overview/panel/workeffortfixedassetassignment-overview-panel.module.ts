import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatListModule, MatMenuModule, MatRadioModule, MatToolbarModule, MatTooltipModule, MatOptionModule, MatSelectModule, MatInputModule } from '@angular/material';

import { AllorsMaterialFileModule } from '../../../../../base/components/role/file';
import { AllorsMaterialInputModule } from '../../../../../base/components/role/input';
import { AllorsMaterialSelectModule } from '../../../../../base/components/role/select';
import { AllorsMaterialSideNavToggleModule } from '../../../../../base/components/sidenavtoggle';
import { AllorsMaterialSlideToggleModule } from '../../../../../base/components/role/slidetoggle';
import { AllorsMaterialStaticModule } from '../../../../../base/components/role/static';
import { AllorsMaterialTextAreaModule } from '../../../../../base/components/role/textarea';
import { AllorsMaterialTableModule } from '../../../../../base/components/table';
import { AllorsMaterialFactoryFabModule } from '../../../../../base/components/factoryfab/factoryfab.module';

import { WorkEffortFixedAssetAssignmentOverviewPanelComponent } from './workeffortfixedassetassignment-overview-panel.component';
export { WorkEffortFixedAssetAssignmentOverviewPanelComponent } from './workeffortfixedassetassignment-overview-panel.component';

@NgModule({
  declarations: [
    WorkEffortFixedAssetAssignmentOverviewPanelComponent,
  ],
  exports: [
    WorkEffortFixedAssetAssignmentOverviewPanelComponent,
  ],
  imports: [
    AllorsMaterialFactoryFabModule,
    AllorsMaterialFileModule,
    AllorsMaterialInputModule,
    AllorsMaterialSelectModule,
    AllorsMaterialSideNavToggleModule,
    AllorsMaterialSlideToggleModule,
    AllorsMaterialStaticModule,
    AllorsMaterialTableModule,
    AllorsMaterialTextAreaModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatTooltipModule,
    MatOptionModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class WorkEffortFixedAssetAssignmentOverviewPanelModule { }
