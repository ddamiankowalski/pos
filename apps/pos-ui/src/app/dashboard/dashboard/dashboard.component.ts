import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [ButtonModule, AvatarModule],
})
export class DashboardComponent {
  public items: MenuItem[] = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' },
  ];
}
