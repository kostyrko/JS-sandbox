import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  editMode = false;
  taskName = 'Tu wpisz zadanie';
  taskDate = '';
  // taskName: string; // tu będzie przechowywana nazwa zadania
  config: { [key: string]: string | Date } = null; // przechowuje info o konfiguracji aplikacji, których wartość jest stringiem, a wartość przypisana do klucza jest stringiem lub datą
  tasks: Task[] = [
    {
      name: 'Rower',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: true,
    },
    {
      name: 'Nauka Angulara-Routing',
      deadline: '2020-01-03',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        // przypisanie obiektu z odpowiednią konfiguracją
        title: 'Lista zadań',
        footer: ' Lista zadań zbudowana w Angularze',
        date: new Date().toDateString(),
      };
    }, 500);
    this.sortTasks();
  }
  clearTasks() {
    this.tasks = [];
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.taskDate = '';
    this.sortTasks();
  }

  switchEditMode() {
    this.editMode = !this.editMode;
  }

  markTaskAsDone(task: Task) {
    task.done = true;
    this.sortTasks();
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(e => e !== task);
    this.sortTasks();
  }

  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
      a.done === b.done ? 0 : a.done ? 1 : -1
    );
  }
}
