import { Component, model, signal } from '@angular/core';
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

@Component({
  selector: 'pos-clients-create',
  templateUrl: 'clients-create.component.html',
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
  ],
})
export class ClientsCreateComponent {
  public visible = model(false);

  public mask = signal('11-123');

  countries = [
    { name: 'Namiar', status: 'lead' },
    { name: 'Zakończony', status: 'finished' },
    { name: 'W trakcie', status: 'in_progress' },
    { name: 'Gotowy', status: 'ready' },
  ];

  public getSeverity(status: string): string {
    switch (status) {
      case 'lead':
        return 'danger';
      case 'finished':
        return 'warn';
      case 'in_progress':
        return 'success';
      case 'ready':
        return 'secondary';
    }

    return '';
  }
}
