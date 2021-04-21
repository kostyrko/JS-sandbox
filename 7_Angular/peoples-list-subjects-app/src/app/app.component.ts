import { Component } from '@angular/core';
import { Person } from './services/data-base.service';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hidden = true;
  person: Person = { firstName: '', lastName: '' };

  constructor(private dataService: DataService) {}

  add(): void {
    // przekazanie informacji z inputa korzystając z metody serwisu
    this.dataService.addPerson(this.person)
  }
}