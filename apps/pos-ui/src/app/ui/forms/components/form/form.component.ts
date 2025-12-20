import { Component, input } from '@angular/core';
import {
  FormField,
  FormFieldComponent,
} from '../form-field/form-field.component';
import { DividerModule } from 'primeng/divider';
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
  imports: [FormFieldComponent, DividerModule],
})
export class FormComponent {
  /**
   * Indicates whether the form is create
   */
  public isCreate = input.required<boolean>();

  public form = input.required<Form>();
}
