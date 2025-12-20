import { Component, input } from '@angular/core';
import { Form, FormComponent } from '../form/form.component';

@Component({
  selector: 'pos-edit-form',
  imports: [FormComponent],
  template: ` <pos-form [form]="form()" [isCreate]="false" /> `,
})
export class EditFormComponent {
  public form = input.required<Form>();
}
