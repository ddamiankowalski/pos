import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../../ui/info-card/info-card.component';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'pos-clients-summary',
  templateUrl: 'clients-summary.component.html',
  imports: [TagModule, InfoCardComponent],
})
export class ClientsSummary {}
