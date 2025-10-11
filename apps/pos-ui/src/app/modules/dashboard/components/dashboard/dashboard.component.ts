import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { MenuItem } from 'primeng/api';

import { ResidentsSummaryComponent } from '../../../residents/components/residents-summary/residents-summary.component';
import { ResidentsTableComponent } from '../../../residents/components/residents-table/residents-table.component';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [
    MenuComponent,
    DashboardHeaderComponent,
    ResidentsSummaryComponent,
    ResidentsTableComponent,
  ],
})
export class DashboardComponent {}
