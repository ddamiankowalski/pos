import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pos-dashboard-header',
  templateUrl: 'dashboard-header.component.html',
  imports: [],
})
export class DashboardHeaderComponent {
  private route = inject(ActivatedRoute);

  constructor() {
    setTimeout(() => {
      console.log(this.route.snapshot);
    }, 1000);
  }
}
