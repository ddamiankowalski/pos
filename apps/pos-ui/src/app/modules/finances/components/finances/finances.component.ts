import { Component } from '@angular/core';
import { DashboardRoute } from '../../../dashboard/directives/dashboard-route/dashboard-route.directive';
import { CardComponent } from '../../../../ui/card/card.component';

@Component({
  selector: 'pos-finances',
  template: `
    <div class="p-4">
      <pos-card> dzoem dpnu </pos-card>
    </div>
  `,
  imports: [CardComponent],
})
export class FinancesComponent extends DashboardRoute {}
