import { Route } from '@angular/router';
import { ResidentsComponent } from './modules/residents/components/residents/residents.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/user/components/login/login.component';
import { NewsComponent } from './modules/news/news.component';

export const appRoutes: Route[] = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: 'residents',
        component: ResidentsComponent,
        data: {
          title: 'Klienci',
          titleDescription:
            'Tutaj znajdziesz wszystkie dane dotyczące klientów',
          icon: 'user',
        },
      },
      {
        path: 'news',
        component: NewsComponent,
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
