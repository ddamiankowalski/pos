import { NgClass } from '@angular/common';
import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { DashboardStore } from '../../store/dashboard.store';

type Module = {
  route: string;
  title: string;
  icon: string;
};

@Component({
  selector: 'pos-menu-items',
  templateUrl: 'menu-items.component.html',
  imports: [ToggleSwitch, FormsModule, NgClass],
  host: {
    class: 'flex md:flex-col gap-6 flex-grow justify-end',
  },
})
export class MenuItemsComponent implements AfterViewInit {
  public readonly modules: Module[] = [
    {
      route: 'clients',
      title: 'Klienci',
      icon: 'user',
    },
    {
      route: 'tasks',
      title: 'Zadania',
      icon: 'sparkles',
    },
    {
      route: 'messages',
      title: 'Wiadomości',
      icon: 'inbox',
    },
  ];

  public dashboard = inject(DashboardStore);

  private _router = inject(Router);

  public onModuleClick({ route }: Module): void {
    this._router.navigate(['/', 'app', route]);
    this.isOpen.set(false);
  }

  public onLogoutClick(): void {
    this._router.navigate(['/', 'login']);
  }

  public isDark = signal(false);

  public isOpen = signal(false);

  public onHamburgerClick(): void {
    this.isOpen.update((isOpen) => !isOpen);
  }

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
