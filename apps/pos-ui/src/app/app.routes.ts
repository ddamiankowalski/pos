import { Route } from '@angular/router';
import { ResidentsComponent } from './modules/residents/components/residents/residents.component';
import { FinancesComponent } from './modules/finances/components/finances/finances.component';

export const appRoutes: Route[] = [
  {
    path: 'residents',
    component: ResidentsComponent,
    data: {
      title: 'Mieszkańcy',
      titleDescription: 'Tutaj znajdziesz wszystkie dane dotyczące mieszkańców',
      icon: 'user',
    },
  },
  {
    path: 'finances',
    component: FinancesComponent,
    data: {
      title: 'Finanse',
      titleDescription: 'Zarządzaj finansami spółdzielni',
      icon: 'receipt',
    },
  },
  { path: '**', redirectTo: 'residents' },
];
