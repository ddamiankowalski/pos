import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { CardComponent } from '../../../../ui/card/card.component';
import { Tag } from 'primeng/tag';
import { NgClass } from '@angular/common';

type NewsItem = {
  title: string;
  description: string;
  status: 'published' | 'draft' | 'scheduled';
};

@Component({
  selector: 'pos-news-list',
  templateUrl: 'news-list.component.html',
  imports: [
    CardComponent,
    DataViewModule,
    PaginatorModule,
    ButtonModule,
    ButtonGroup,
    Tag,
    NgClass,
  ],
})
export class NewsListComponent {
  public news = signal<NewsItem[]>([
    {
      status: 'scheduled',
      description: 'Some description',
      title: 'Test Title',
    },
    {
      status: 'scheduled',
      description: 'Some description',
      title: 'Test Title',
    },
    {
      status: 'scheduled',
      description: 'Some description',
      title: 'Test Title',
    },
  ]);

  public statusLabel(status: 'published' | 'draft' | 'scheduled'): string {
    switch (status) {
      case 'draft':
        return 'W trakcie';
      case 'published':
        return 'Opublikowany';
      case 'scheduled':
        return 'Zaplanowany';
    }
  }
}
