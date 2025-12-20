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
  FormComponent,
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
    FormComponent,
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
          },
          {
            type: FieldType.Text,
            label: 'Nazwisko',
            value: null,
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
            label: 'Imię',
            value: null,
            isEditable: false,
          },
          {
            type: FieldType.Text,
            label: 'Nazwisko',
            value: null,
            isEditable: true,
          },
        ],
      },
    ],
  };
}
