import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { CardComponent } from '../../../../ui/card/card.component';
import { Tag } from 'primeng/tag';
import { Tooltip } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import {
  Form,
  FormModalComponent,
} from '../../../../ui/forms/components/form/form.component';
import { FieldType } from '../../../../ui/forms/components/form-field/form-field.component';

@Component({
  selector: 'pos-clients-table',
  templateUrl: 'clients-table.component.html',
  host: { class: 'contents' },
  imports: [
    TableModule,
    ButtonModule,
    ButtonGroupModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    CardComponent,
    Tag,
    Tooltip,
    InputIconModule,
    IconFieldModule,
    FormModalComponent,
  ],
})
export class ClientsTableComponent {
  public selectedProducts = signal([]);

  selectedCountry: string | undefined;

  public form: Form = {
    sections: [
      {
        title: 'Podstawowe informacje',
        description: 'Wypełnij podstawowe informacje',
        fields: [
          {
            type: FieldType.Text,
            label: 'Imię',
            value: null,
            isEditable: false,
            placeholder: 'Wpisz imie',
          },
          {
            type: FieldType.Text,
            label: 'Nazwisko',
            value: null,
            placeholder: 'Wpisz nazwisko',
            isEditable: true,
          },
          {
            type: FieldType.Text,
            label: 'Adres',
            value: null,
            placeholder: 'Wpisz adres klienta',
            isEditable: true,
          },
          {
            type: FieldType.Text,
            label: 'Kod pocztowy',
            value: null,
            placeholder: 'Wpisz kod pocztowy',
            isEditable: true,
          },
        ],
      },
      {
        title: 'Status klienta',
        description: 'Wypełnij pozostałe dodatkowe informacje',
        fields: [
          {
            type: FieldType.Text,
            label: 'Status',
            value: null,
            isEditable: false,
            placeholder: 'Wybierz status',
          },
          {
            type: FieldType.Text,
            label: 'Adres',
            value: null,
            placeholder: 'Wpisz adres',
            isEditable: true,
          },
        ],
      },
    ],
  };

  public getSeverity(status: string): string {
    switch (status) {
      case 'lead':
        return 'danger';
      case 'finished':
        return 'warn';
      case 'in_progress':
        return 'success';
      case 'ready':
        return 'secondary';
    }

    return '';
  }

  public visible = signal(false);
  public detailsVisible = signal(false);

  clients = [
    {
      id: '1',
      name: 'Jan Kowalski',
      address: 'ul. Główna 12, Warszawa',
      status: 'lead',
    },
    {
      id: '2',
      name: 'Anna Nowak',
      address: 'ul. Lipowa 5, Kraków',
      status: 'in_progress',
    },
    {
      id: '3',
      name: 'Piotr Wiśniewski',
      address: 'ul. Wiosenna 23, Gdańsk',
      status: 'finished',
    },
    {
      id: '4',
      name: 'Katarzyna Zielińska',
      address: 'ul. Słoneczna 7, Wrocław',
      status: 'ready',
    },
    {
      id: '5',
      name: 'Michał Lewandowski',
      address: 'ul. Długa 15, Poznań',
      status: 'lead',
    },
    {
      id: '6',
      name: 'Agnieszka Kaczmarek',
      address: 'ul. Krótka 9, Łódź',
      status: 'in_progress',
    },
    {
      id: '7',
      name: 'Tomasz Kamiński',
      address: 'ul. Polna 18, Szczecin',
      status: 'finished',
    },
    {
      id: '8',
      name: 'Magdalena Woźniak',
      address: 'ul. Modrzewiowa 3, Lublin',
      status: 'ready',
    },
    {
      id: '9',
      name: 'Paweł Grabowski',
      address: 'ul. Jesionowa 11, Białystok',
      status: 'lead',
    },
    {
      id: '10',
      name: 'Ewa Pawlak',
      address: 'ul. Brzozowa 6, Katowice',
      status: 'in_progress',
    },
    {
      id: '11',
      name: 'Robert Nowicki',
      address: 'ul. Bukowa 2, Toruń',
      status: 'finished',
    },
    {
      id: '12',
      name: 'Joanna Piotrowska',
      address: 'ul. Grabowa 8, Olsztyn',
      status: 'ready',
    },
  ];

  public onDetailsClick(): void {
    this.detailsVisible.set(true);
  }
}
