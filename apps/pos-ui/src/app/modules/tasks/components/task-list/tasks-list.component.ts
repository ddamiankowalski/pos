import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { CardComponent } from '../../../../ui/card/card.component';

type NewsItem = {
  title: string;
  description: string;
  status: 'published' | 'draft' | 'scheduled';
};

@Component({
  selector: 'pos-tasks-list',
  templateUrl: 'tasks-list.component.html',
  imports: [
    CardComponent,
    DataViewModule,
    PaginatorModule,
    ButtonModule,
    ButtonGroup,
  ],
})
export class TasksListComponent {
  public news = signal<NewsItem[]>([
    {
      status: 'published',
      title: 'Remont klatki schodowej przy ul. Lipowej 12',
      description:
        'Od 15 października rozpocznie się remont klatki schodowej w budynku przy ul. Lipowej 12. Prace potrwają około dwóch tygodni. Prosimy mieszkańców o zachowanie ostrożności.',
    },
    {
      status: 'scheduled',
      title: 'Przerwa w dostawie ciepłej wody',
      description:
        'W dniu 18 października w godzinach 8:00–14:00 planowana jest przerwa w dostawie ciepłej wody z powodu prac konserwacyjnych.',
    },
    {
      status: 'draft',
      title: 'Nowy regulamin korzystania z placu zabaw',
      description:
        'Trwają prace nad aktualizacją regulaminu korzystania z placu zabaw na osiedlu. Po zatwierdzeniu dokument zostanie opublikowany na stronie spółdzielni.',
    },
    {
      status: 'published',
      title: 'Zebranie mieszkańców osiedla "Słoneczne"',
      description:
        'Zapraszamy na zebranie mieszkańców, które odbędzie się 22 października o godzinie 18:00 w sali klubowej przy ul. Wiosennej 8.',
    },
    {
      status: 'published',
      title: 'Nowe oświetlenie na parkingu przy ul. Wierzbowej',
      description:
        'Zakończono montaż nowego energooszczędnego oświetlenia LED na parkingu. Mamy nadzieję, że poprawi to bezpieczeństwo i komfort mieszkańców.',
    },
    {
      status: 'scheduled',
      title: 'Sprzątanie terenu wokół budynków',
      description:
        'W dniach 21–23 października planowane jest jesienne sprzątanie terenu osiedla. Prosimy o nieparkowanie samochodów przy chodnikach w tym czasie.',
    },
    {
      status: 'draft',
      title: 'Wymiana domofonów w blokach przy ul. Klonowej',
      description:
        'Przygotowywany jest projekt wymiany domofonów na nowoczesne modele z funkcją otwierania z aplikacji mobilnej.',
    },
    {
      status: 'published',
      title: 'Zgłaszanie usterek przez eBOK',
      description:
        'Przypominamy, że wszystkie usterki i awarie można zgłaszać poprzez Elektroniczne Biuro Obsługi Klienta (eBOK) dostępnym na stronie spółdzielni.',
    },
    {
      status: 'scheduled',
      title: 'Zbiórka elektroodpadów',
      description:
        'W sobotę 26 października odbędzie się zbiórka elektroodpadów na parkingu przy ul. Brzozowej. Zachęcamy do oddawania starych urządzeń elektrycznych.',
    },
    {
      status: 'published',
      title: 'Modernizacja windy przy ul. Dębowej 5',
      description:
        'Zakończono prace związane z modernizacją windy w budynku przy ul. Dębowej 5. Urządzenie jest już w pełni sprawne i gotowe do użytku.',
    },
    {
      status: 'draft',
      title: 'Program dopłat do wymiany stolarki okiennej',
      description:
        'Spółdzielnia planuje wprowadzenie programu częściowego dofinansowania wymiany okien. Szczegóły zostaną ogłoszone po zatwierdzeniu uchwały.',
    },
    {
      status: 'published',
      title: 'Podziękowania dla mieszkańców za udział w akcji sadzenia drzew',
      description:
        'Dziękujemy wszystkim, którzy wzięli udział w sobotniej akcji sadzenia drzew. Dzięki Państwa zaangażowaniu posadziliśmy 18 nowych drzew na terenie osiedla.',
    },
  ]);

  public statusLabel(status: 'published' | 'draft' | 'scheduled'): string {
    switch (status) {
      case 'draft':
        return 'W trakcie';
      case 'published':
        return 'Opublikowany';
      case 'scheduled':
        return 'Zaplanowany';
    }
  }

  public statusSeverity(
    status: 'published' | 'draft' | 'scheduled'
  ): 'success' | 'info' | 'warn' {
    switch (status) {
      case 'draft':
        return 'info';
      case 'published':
        return 'success';
      case 'scheduled':
        return 'warn';
    }
  }
}
