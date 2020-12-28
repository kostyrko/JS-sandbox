import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  }
  clearTasks() {
    this.tasks = [];
  }

  // onKeyUp(event: KeyboardEvent) {
  //   const target = event.target as HTMLInputElement;
  //   console.log(target.value);
  //   this.taskName = target.value;
  // }

  createTask(name:string, deadline:string) {
    const task: Task = {
      name,
      deadline,
      done: false,
    }
    this.tasks.push(task)
  }
}
