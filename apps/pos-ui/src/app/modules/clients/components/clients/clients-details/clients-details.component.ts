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
import { FormFieldComponent } from '../../../../../ui/forms/form-field/form-field.component';

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
    FormFieldComponent,
  ],
})
export class ClientsDetailsComponent {
  public visible = model(false);
}
