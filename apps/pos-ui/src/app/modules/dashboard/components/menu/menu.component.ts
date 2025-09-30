import { AfterViewInit, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { MenuUserComponent } from '../menu-user/menu-user.component';

@Component({
  selector: 'pos-menu',
  templateUrl: 'menu.component.html',
  imports: [ToggleSwitch, FormsModule, MenuUserComponent],
})
export class MenuComponent implements AfterViewInit {
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
