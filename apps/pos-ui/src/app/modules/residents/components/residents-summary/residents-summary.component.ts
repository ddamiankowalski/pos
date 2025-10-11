import { Component } from '@angular/core';
import { InfoCardComponent } from '../../../../ui/info-card/info-card.component';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'pos-residents-summary',
  templateUrl: 'residents-summary.component.html',
  imports: [TagModule, InfoCardComponent],
})
export class ResidentsSummaryComponent {}
