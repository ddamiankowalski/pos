import { AfterViewInit, Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { FacilitiesComponent } from '../facilities/facilities.component';
import { SplitterModule } from 'primeng/splitter';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'pos-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrl: 'dashboard.component.scss',
  imports: [
    ButtonModule,
    AvatarModule,
    ToggleSwitchModule,
    FormsModule,
    FacilitiesComponent,
    SplitterModule,
    InputTextModule,
    FloatLabelModule,
    GoogleMap,
  ],
})
export class DashboardComponent implements AfterViewInit {
  public items: MenuItem[] = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' },
  ];

  public isDark = signal(false);

  public onThemeClick(): void {
    document.documentElement.classList.toggle('pos-dark');
    this._updateTheme();
  }

  public ngAfterViewInit(): void {
    this._updateTheme();
  }

  private _updateTheme(): void {
    const isDark = document.documentElement.classList.contains('pos-dark');
    this.isDark.set(isDark);
  }
}
