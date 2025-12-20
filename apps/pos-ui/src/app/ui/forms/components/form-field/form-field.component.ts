import { Component, input, signal } from '@angular/core';
import { Button } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputText } from 'primeng/inputtext';

export type FormField<T = string> = {
  label: string;
  value: T | null;
  placeholder: string;
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
export class FormFieldComponent {
  public isEditing = signal<boolean>(false);

  public field = input.required<FormField>();

  public isCreate = input.required<boolean>();

  public onEditClick(): void {
    this.isEditing.update((isEditing) => !isEditing);
  }

  public onSaveClick(): void {
    console.log('save!');
    this.isEditing.set(false);
  }
}
