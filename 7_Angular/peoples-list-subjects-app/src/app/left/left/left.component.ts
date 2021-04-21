import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Person } from 'src/app/services/data-base.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
})
export class LeftComponent implements OnInit, OnDestroy {

  persons: Person[];
  // nowy obiekt do przechwycenie subskrypcji (pozwoli na ich zamknięcie po zamknięciu komponentu)
  private subscriptions = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // odbieram dane z obiektu (behaviorSubject) i przypisuje je do listy w tym komponencie
    const sub = this.dataService.behaviorSubject.subscribe(
      (data: Person[]) => {
        this.persons = data;
        console.log('Left Component Subscription');
      },
      error => console.error(error),
      () => console.log('LeftComponent complete?')
    )
    // dodanie wywołania do obiektu subskrypcji
    this.subscriptions.add(sub);
  }

  ngOnDestroy(): void {
    // zamknięcie subskrypcji (nie odnosi się to do działania BehaviorSubject)
    this.subscriptions.unsubscribe();
  }
}
