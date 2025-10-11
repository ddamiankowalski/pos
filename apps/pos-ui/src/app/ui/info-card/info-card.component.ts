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
        return 'border border-error-dark';
      case 'primary':
        return 'border border-success-dark';
      case 'warn':
        return 'border border-warn-dark';
    }
  });

  public backgroundStyle = computed(() => {
    const type = this.type();

    switch (type) {
      case 'error':
        return 'bg-error';
      case 'primary':
        return 'bg-success';
      case 'warn':
        return 'bg-warn';
    }
  });

  public textStyle = computed(() => {
    const type = this.type();

    switch (type) {
      case 'error':
        return 'text-error-dark';
      case 'primary':
        return 'text-success-dark';
      case 'warn':
        return 'text-warn-dark';
    }
  });

  public severity = computed(() => {
    const type = this.type();

    switch (type) {
      case 'error':
        return 'danger';
      case 'primary':
        return 'success';
      case 'warn':
        return 'warn';
    }
  });
}
