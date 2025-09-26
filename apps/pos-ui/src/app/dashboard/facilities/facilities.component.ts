import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'pos-facilities',
  templateUrl: 'facilities.component.html',
  styleUrl: 'facilities.component.scss',
  imports: [DataViewModule, NgClass, TagModule, ButtonModule, CommonModule],
})
export class FacilitiesComponent {
  products = signal([
    {
      name: 'Stadion Narodowy',
      image: 'bamboo-watch.jpg',
      category: 'Stadiony',
      inventoryStatus: 'available',
      rating: 5,
      price: 100,
    },
    {
      name: 'Boisko Piłkarskie Orlik',
      image: 'bamboo-watch.jpg',
      category: 'Boiska',
      inventoryStatus: 'taken',
      rating: 4,
      price: 50,
    },
    {
      name: 'Hala Widowiskowa',
      image: 'bamboo-watch.jpg',
      category: 'Hale sportowe',
      inventoryStatus: 'available',
      rating: 5,
      price: 80,
    },
    {
      name: 'Kort Tenisowy',
      image: 'bamboo-watch.jpg',
      category: 'Korty',
      inventoryStatus: 'available',
      rating: 4,
      price: 40,
    },
    {
      name: 'Basen Olimpijski',
      image: 'bamboo-watch.jpg',
      category: 'Baseny',
      inventoryStatus: 'maintenance',
      rating: 5,
      price: 70,
    },
    {
      name: 'Tor Łyżwiarski',
      image: 'bamboo-watch.jpg',
      category: 'Tory sportowe',
      inventoryStatus: 'available',
      rating: 4,
      price: 60,
    },
    {
      name: 'Siłownia Miejska',
      image: 'bamboo-watch.jpg',
      category: 'Siłownie',
      inventoryStatus: 'available',
      rating: 5,
      price: 30,
    },
    {
      name: 'Ściana Wspinaczkowa',
      image: 'bamboo-watch.jpg',
      category: 'Ściany wspinaczkowe',
      inventoryStatus: 'taken',
      rating: 5,
      price: 45,
    },
    {
      name: 'Tor Kartingowy',
      image: 'bamboo-watch.jpg',
      category: 'Tory wyścigowe',
      inventoryStatus: 'available',
      rating: 4,
      price: 55,
    },
  ]);
}
