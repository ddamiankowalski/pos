import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [MenuComponent, DashboardHeaderComponent, RouterOutlet],
})
export class DashboardComponent {}
