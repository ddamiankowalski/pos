import { Component, input, model } from '@angular/core';
import {
  FormField,
  FormFieldComponent,
} from '../form-field/form-field.component';
import { DividerModule } from 'primeng/divider';
import { Dialog } from 'primeng/dialog';
import { Button } from 'primeng/button';

export type Form = {
  sections: {
    title: string;
    description: string;
    fields: FormField[];
  }[];
};

@Component({
  selector: 'pos-form-modal',
  templateUrl: 'form.component.html',
  imports: [FormFieldComponent, DividerModule, Dialog, Button],
})
export class FormModalComponent {
  /**
   * Indicates whether the form is create
   */
  public isCreate = input.required<boolean>();

  /**
   * Indicates whether form modal is visible
   */
  public visible = model(false);

  public form = input.required<Form>();
}
