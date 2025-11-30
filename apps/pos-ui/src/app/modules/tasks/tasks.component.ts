import { Component } from '@angular/core';
import { DashboardRoute } from '../dashboard/directives/dashboard-route/dashboard-route.directive';
import { TasksListComponent } from './components/task-list/tasks-list.component';

@Component({
  selector: 'pos-news',
  host: { class: 'h-full overflow-hidden' },
  template: `
    <div class="p-4 h-full">
      <pos-tasks-list />
    </div>
  `,
  imports: [TasksListComponent],
})
export class TasksComponent extends DashboardRoute {}
