import { Component } from '@angular/core';
import { Splitter } from 'primeng/splitter';
import { InputText } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { MenuComponent } from '../menu/menu.component';
import { DashboardHeaderComponent } from '../dashboard-header/dashboard-header.component';

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
  ],
})
export class DashboardComponent {}
