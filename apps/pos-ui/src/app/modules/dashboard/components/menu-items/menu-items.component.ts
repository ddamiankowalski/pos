import { NgClass } from '@angular/common';
import { AfterViewInit, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { ToggleSwitch } from 'primeng/toggleswitch';

@Component({
  selector: 'pos-menu-items',
  templateUrl: 'menu-items.component.html',
  imports: [ToggleSwitch, FormsModule, NgClass],
  host: {
    class: 'flex md:flex-col gap-6',
  },
})
export class MenuItemsComponent implements AfterViewInit {
  public items: MenuItem[] = [
    { label: 'New', icon: 'pi pi-plus' },
    { label: 'Search', icon: 'pi pi-search' },
  ];

  public isDark = signal(false);

  public isOpen = signal(false);

  public onHamburgerClick(): void {
    this.isOpen.update((isOpen) => !isOpen);
  }

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
