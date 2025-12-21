import { Route } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { LoginComponent } from './modules/user/components/login/login.component';
import { ClientsComponent } from './modules/clients/components/clients/clients.component';
import { TasksComponent } from './modules/tasks/tasks.component';

export const appRoutes: Route[] = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      {
        path: 'clients',
        component: ClientsComponent,
        data: {
          title: 'Klienci',
          titleDescription:
            'Tutaj znajdziesz wszystkie dane dotyczące klientów',
          icon: 'user',
        },
      },
      {
        path: 'tasks',
        component: TasksComponent,
        data: {
          title: 'Zadania',
          titleDescription:
            'Przeglądaj zadania i powiadom o nich odpowiednie osoby',
          icon: 'sparkles',
        },
      },
      {
        path: 'messages',
        component: TasksComponent,
        data: {
          title: 'Wiadomości',
          titleDescription:
            'Przeglądaj wiadomości i powiadom o nich odpowiednie osoby',
          icon: 'inbox',
        },
      },
      { path: '**', redirectTo: 'clients' },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  { path: '**', redirectTo: 'login' },
];
