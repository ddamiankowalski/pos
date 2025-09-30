import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [
    ButtonModule,
    AvatarModule,
    FormsModule,
    SplitterModule,
    InputTextModule,
    FloatLabelModule,
    MenuComponent,
  ],
})
export class DashboardComponent {}
