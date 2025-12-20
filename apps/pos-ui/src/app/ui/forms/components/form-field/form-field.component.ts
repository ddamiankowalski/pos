import { Component, input, model } from '@angular/core';
import { Button } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';

export type FormField<T = string> = {
  label: string;
  value: T | null;
  isEditable: boolean;
  type: FieldType;
};

export enum FieldType {
  Text = 'TEXT',
  Select = 'SELECT',
}

@Component({
  selector: 'pos-form-field',
  templateUrl: 'form-field.component.html',
  host: { class: 'flex justify-between' },
  imports: [FloatLabel, InputText, Button],
})
export class FormFieldComponent<T> {
  public isEditing = model<boolean>(false);

  /**
   * Indicates whether form field is editable
   */
  public isEditable = input.required<boolean>();

  /**
   * Label to be displayed
   */
  public label = input.required<string>();

  /**
   * Value of the form field
   */
  public value = input<T | null>(null);

  public onEditClick(): void {
    this.isEditing.update((isEditing) => !isEditing);
  }

  public onSaveClick(): void {
    console.log('save!');
    this.isEditing.set(false);
  }
}
