import { AfterViewInit, Component, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuUserComponent } from '../menu-user/menu-user.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'pos-menu',
  templateUrl: 'menu.component.html',
  imports: [MenuUserComponent, MenuItemsComponent],
})
export class MenuComponent implements AfterViewInit {
  public items: MenuItem[] = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' },
  ];

  public isDark = signal(false);

  public onThemeClick(): void {
    document.documentElement.classList.toggle('dark');
    this._updateTheme();
  }

  public ngAfterViewInit(): void {
    this._updateTheme();
  }

  private _updateTheme(): void {
    const isDark = document.documentElement.classList.contains('dark');
    this.isDark.set(isDark);
  }
}
