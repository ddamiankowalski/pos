import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TagModule } from 'primeng/tag';

type InfoCardType = 'error' | 'warn' | 'primary';

@Component({
  selector: 'pos-info-card',
  templateUrl: 'info-card.component.html',
  imports: [TagModule, NgClass],
})
export class InfoCardComponent {
  public title = input.required<string>();

  public type = input<InfoCardType>('primary');

  public value = input<string | number | null>();

  public description = input<string | null>();

  public descriptionIcon = input<string>('');

  public borderStyle = computed(() => {
    const type = this.type();

    switch (type) {
      case 'error':
        return 'border border-error-dark bg-error';
      case 'primary':
        return 'border border-surface-300';
      case 'warn':
        return 'border border-surface-300';
    }
  });

  public backgroundStyle = computed(() => {
    const type = this.type();

    switch (type) {
      case 'error':
        return 'bg-error';
      case 'primary':
        return 'bg-surface-0';
      case 'warn':
        return 'bg-surface-0';
    }
  });
}
