import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';
import { PaginatorModule } from 'primeng/paginator';
import { DataViewModule } from 'primeng/dataview';
import { CardComponent } from '../../../../ui/card/card.component';
import { form } from '@angular/forms/signals';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  CdkDragPreview,
  CdkDragPlaceholder,
} from '@angular/cdk/drag-drop';
import { NgClass, NgFor } from '@angular/common';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

@Component({
  selector: 'pos-tasks-list',
  templateUrl: 'tasks-list.component.html',
  imports: [
    CardComponent,
    DataViewModule,
    PaginatorModule,
    ButtonModule,
    ButtonGroup,
    CdkDrag,
    CdkDropList,
    CdkDropListGroup,
    NgClass,
    CdkDragPreview,
    CdkDragPlaceholder,
    NgFor,
  ],
})
export class TasksListComponent {
  loginModel = signal({
    firstName: '',
    lastName: '',
  });

  loginForm = form(this.loginModel);

  columns: Column[] = [
    {
      id: 'todo',
      title: 'Do zrobienia',
      tasks: [
        {
          id: '1',
          title: 'Zadanie 1',
          description: 'Opis zadania 1',
          priority: 'high',
        },
        {
          id: '2',
          title: 'Zadanie 2',
          description: 'Opis zadania 2',
          priority: 'medium',
        },
      ],
    },
    {
      id: 'in-progress',
      title: 'W trakcie',
      tasks: [
        {
          id: '3',
          title: 'Zadanie 3',
          description: 'Opis zadania 3',
          priority: 'high',
        },
      ],
    },
    {
      id: 'review',
      title: 'Do sprawdzenia',
      tasks: [
        {
          id: '4',
          title: 'Zadanie 4',
          description: 'Opis zadania 4',
          priority: 'low',
        },
      ],
    },
    {
      id: 'done',
      title: 'Ukończone',
      tasks: [
        {
          id: '5',
          title: 'Zadanie 5',
          description: 'Opis zadania 5',
          priority: 'medium',
        },
      ],
    },
  ];

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'high':
        return 'priority-high';
      case 'medium':
        return 'priority-medium';
      case 'low':
        return 'priority-low';
      default:
        return '';
    }
  }

  getPriorityLabel(priority: string): string {
    switch (priority) {
      case 'high':
        return 'Wysoki';
      case 'medium':
        return 'Średni';
      case 'low':
        return 'Niski';
      default:
        return '';
    }
  }

  addTask() {
    // Implement add task logic
    console.log('Add task clicked');
  }
}
