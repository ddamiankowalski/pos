import { Component } from '@angular/core';
import { ClientsSummary } from '../clients-summary/clients-summary.component';
import { ClientsTableComponent } from '../clients-table/clients-table.component';
import { DashboardRoute } from '../../../dashboard/directives/dashboard-route/dashboard-route.directive';

@Component({
  selector: 'pos-clients',
  host: { class: 'contents' },
  template: `
    <div class="flex flex-col flex-grow">
      <!-- Summary -->
      <pos-clients-summary />

      <!-- Table -->
      <pos-clients-table />
    </div>
  `,
  imports: [ClientsSummary, ClientsTableComponent],
})
export class ClientsComponent extends DashboardRoute {}
