import { Route } from '@angular/router';
import { ResidentsComponent } from './modules/residents/components/residents/residents.component';
import { FinancesComponent } from './modules/finances/components/finances/finances.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/user/components/login/login.component';

export const appRoutes: Route[] = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: 'residents',
        component: ResidentsComponent,
        data: {
          title: 'Mieszkańcy',
          titleDescription:
            'Tutaj znajdziesz wszystkie dane dotyczące mieszkańców',
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
      {
        path: 'documents',
        component: FinancesComponent,
        data: {
          title: 'Dokumenty',
          titleDescription: 'Zarządzaj swoimi dokumentami',
          icon: 'file-pdf',
        },
      },
      {
        path: 'news',
        component: FinancesComponent,
        data: {
          title: 'Aktualności',
          titleDescription:
            'Przeglądaj aktualności i powiadom o nich odpowiednie osoby',
          icon: 'sparkles',
        },
      },
      { path: '**', redirectTo: 'residents' },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: 'login' },
];
