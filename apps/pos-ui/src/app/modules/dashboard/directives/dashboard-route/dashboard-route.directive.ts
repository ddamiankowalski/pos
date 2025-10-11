import { Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DashboardStore } from '../../store/dashboard.store';
import { ActivatedRoute } from '@angular/router';

@Directive()
export abstract class DashboardRoute {
  private _dashboard = inject(DashboardStore);
  private _route = inject(ActivatedRoute);

  constructor() {
    this._updateTitle();
  }

  private _updateTitle(): void {
    this._route.data
      .pipe(takeUntilDestroyed())
      .subscribe(({ title, titleDescription, icon }) =>
        this._dashboard.setModule(title, titleDescription, icon)
      );
  }
}
