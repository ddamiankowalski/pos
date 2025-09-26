import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { PRIME_NG_CONFIG } from 'primeng/config';

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

  constructor() {
    const config = inject(PRIME_NG_CONFIG);
    console.log('Current theme:', config.theme);
    setTimeout(() => {
      document.documentElement.classList.toggle('dark');

      const isDarkMode = document.documentElement.classList.contains('dark');
      console.log('Dark mode?', isDarkMode);
    }, 2000);
  }
}
