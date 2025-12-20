import { Component, input } from '@angular/core';
import { Form, FormComponent } from '../form/form.component';

@Component({
  selector: 'pos-create-form',
  imports: [FormComponent],
  template: ` <pos-form [form]="form()" [isCreate]="true" /> `,
})
export class CreateFormComponent {
  public form = input.required<Form>();
}
