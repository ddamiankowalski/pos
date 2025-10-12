import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { DashboardRoute } from '../dashboard/directives/dashboard-route/dashboard-route.directive';
import { CardComponent } from '../../ui/card/card.component';
import { ButtonModule } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';

@Component({
  selector: 'pos-news',
  template: `
    <div class="p-4">
      <pos-card>
        <div
          class="flex gap-0 px-4 flex-col items-start md:gap-4 md:flex-row md:items-center justify-between"
        >
          <div class="flex flex-col justify-center align-between mb-4">
            <span class="text-xl font-bold">Aktualności</span>
            <p class="text-surface-500">
              Przeglądaj wszystkie aktualności i zobacz które z nich zostały
              wyświetlone
            </p>
          </div>
          <div class="flex gap-2">
            <p-buttongroup class="text-nowrap">
              <p-button label="Dodaj" icon="pi pi-plus" size="small" />
            </p-buttongroup>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="flex w-full">
            <div class="w-[10rem] h-[4rem] bg-red-200"></div>
          </div>
          <div>rekord</div>
          <div>rekord</div>
        </div>

        <p-paginator [totalRecords]="120" appendTo="body" />
      </pos-card>
    </div>
  `,
  imports: [CardComponent, PaginatorModule, ButtonModule, ButtonGroup],
})
export class NewsComponent extends DashboardRoute {}
