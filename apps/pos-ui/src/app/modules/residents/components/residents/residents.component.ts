import { Component } from '@angular/core';
import { ResidentsSummaryComponent } from '../residents-summary/residents-summary.component';
import { ResidentsTableComponent } from '../residents-table/residents-table.component';
import { DashboardRoute } from '../../../dashboard/directives/dashboard-route/dashboard-route.directive';

@Component({
  selector: 'pos-residents',
  host: { class: 'contents' },
  template: `
    <div class="flex flex-col flex-grow">
      <!-- Summary -->
      <pos-residents-summary />

      <!-- Table -->
      <pos-residents-table />
    </div>
  `,
  imports: [ResidentsSummaryComponent, ResidentsTableComponent],
})
export class ResidentsComponent extends DashboardRoute {}
