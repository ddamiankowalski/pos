import { Component } from '@angular/core';
import { DashboardRoute } from '../dashboard/directives/dashboard-route/dashboard-route.directive';
import { NewsListComponent } from './components/news-list/news-list.component';

@Component({
  selector: 'pos-news',
  host: { class: 'h-full overflow-hidden' },
  template: `
    <div class="p-4 h-full">
      <pos-news-list />
    </div>
  `,
  imports: [NewsListComponent],
})
export class NewsComponent extends DashboardRoute {}
