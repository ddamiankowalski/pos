import { Component, model } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputMaskModule } from 'primeng/inputmask';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import {
  Form,
  FormModalComponent,
} from '../../../../../ui/forms/components/form/form.component';
import { FieldType } from '../../../../../ui/forms/components/form-field/form-field.component';

@Component({
  selector: 'pos-clients-details',
  templateUrl: 'clients-details.component.html',
  imports: [
    DialogModule,
    FloatLabelModule,
    SelectModule,
    ButtonModule,
    ButtonModule,
    ButtonGroupModule,
    InputTextModule,
    FloatLabelModule,
    SelectModule,
    InputIconModule,
    IconFieldModule,
    InputMaskModule,
    FormsModule,
    TagModule,
    FormModalComponent,
  ],
})
export class ClientsDetailsComponent {
  public visible = model(false);

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
}
