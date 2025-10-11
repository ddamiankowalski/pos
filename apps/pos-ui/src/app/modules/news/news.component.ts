import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { DashboardRoute } from '../dashboard/directives/dashboard-route/dashboard-route.directive';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'pos-news',
  template: `
    <div class="p-4">
      <pos-card> dzoem dpnu </pos-card>
    </div>
  `,
  imports: [CardComponent, PaginatorModule],
})
export class NewsComponent extends DashboardRoute {}
