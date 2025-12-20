import { Component, input } from '@angular/core';
import {
  FormField,
  FormFieldComponent,
} from '../form-field/form-field.component';

export type Form = {
  sections: {
    title: string;
    description: string;
    fields: FormField[];
  }[];
};

@Component({
  selector: 'pos-form',
  templateUrl: 'form.component.html',
  imports: [FormFieldComponent],
})
export class FormComponent {
  public form = input.required<Form>();
}
