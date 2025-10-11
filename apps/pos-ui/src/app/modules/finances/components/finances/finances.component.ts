import { Component } from '@angular/core';
import { DashboardRoute } from '../../../dashboard/directives/dashboard-route/dashboard-route.directive';

@Component({
  selector: 'pos-finances',
  template: ` I am finances `,
  imports: [],
})
export class FinancesComponent extends DashboardRoute {}
