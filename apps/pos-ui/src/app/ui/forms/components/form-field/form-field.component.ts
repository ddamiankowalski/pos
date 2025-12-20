import { Component, input, model } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';

export type FormField<T = string> = {
  label: string;
  value: T | null;
};

@Component({
  selector: 'pos-form-field',
  templateUrl: 'form-field.component.html',
  imports: [FloatLabel, InputText],
})
export class FormFieldComponent<T> {
  public isEdit = model<boolean>(false);

  /**
   * Label to be displayed
   */
  public label = input.required<string>();

  /**
   * Value of the form field
   */
  public value = input<T | null>(null);
}
