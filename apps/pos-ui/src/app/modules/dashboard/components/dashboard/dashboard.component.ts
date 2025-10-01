import { Component } from '@angular/core';
import { Splitter } from 'primeng/splitter';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [
    Splitter,
    InputText,
    FloatLabel,
    MenuComponent,
    DashboardHeaderComponent,
    TableModule,
    CurrencyPipe,
  ],
})
export class DashboardComponent {
  orders = [
    { id: 1, client: 'Jan Kowalski', status: 'Nowe', total: 120.5 },
    { id: 2, client: 'Anna Nowak', status: 'W realizacji', total: 350.0 },
    { id: 3, client: 'Piotr Wiśniewski', status: 'Zakończone', total: 89.99 },
    // ... kolejne zamówienia
  ];

  applyGlobalFilter(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    (document.querySelector('p-table') as any)?.filterGlobal(value, 'contains');
  }
}
