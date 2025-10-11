import { Route } from '@angular/router';
import { ResidentsComponent } from './modules/residents/components/residents/residents.component';
import { FinancesComponent } from './modules/finances/components/finances/finances.component';

export const appRoutes: Route[] = [
  {
    path: 'residents',
    component: ResidentsComponent,
  },
  {
    path: 'finances',
    component: FinancesComponent,
  },
  { path: '**', redirectTo: 'residents' },
];
