import { Component, inject } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { RouterOutlet } from '@angular/router';
import { DashboardStore } from '../../store/dashboard.store';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [MenuComponent, DashboardHeaderComponent, RouterOutlet],
  providers: [DashboardStore],
})
export class DashboardComponent {
  public dashboard = inject(DashboardStore);
}
