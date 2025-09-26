import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'pos-facilities',
  templateUrl: 'facilities.component.html',
  styleUrl: 'facilities.component.scss',
  imports: [DataViewModule, NgClass, TagModule, ButtonModule],
})
export class FacilitiesComponent {
  products = signal([]);
}
