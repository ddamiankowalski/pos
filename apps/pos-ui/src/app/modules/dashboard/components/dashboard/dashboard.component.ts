import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { Button } from 'primeng/button';
import { Tabs, TabList, Tab, TabPanel, TabPanels } from 'primeng/tabs';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [
    MenuComponent,
    DashboardHeaderComponent,
    TableModule,
    Button,
    Tabs,
    TabList,
    Tab,
    CardModule,
    TabPanel,
    TabPanels,
  ],
})
export class DashboardComponent {
  orders = [
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 33, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
  ];

  applyGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    (document.querySelector('p-table') as any)?.filterGlobal(value, 'contains');
  }
}
