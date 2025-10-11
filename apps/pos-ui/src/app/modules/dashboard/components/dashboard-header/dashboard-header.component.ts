import { Component, inject } from '@angular/core';
import { DashboardStore } from '../../store/dashboard.store';

@Component({
  selector: 'pos-dashboard-header',
  templateUrl: 'dashboard-header.component.html',
  imports: [],
})
export class DashboardHeaderComponent {
  public dashboard = inject(DashboardStore);
}
