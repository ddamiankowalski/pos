import { Component } from '@angular/core';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';

@Component({
  selector: 'pos-root',
  standalone: true,
  templateUrl: 'app.html',
  imports: [DashboardComponent],
})
export class App {
  protected title = 'pos-ui';
}
