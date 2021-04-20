// pobranie listy osób i przekazanie ich do komponentów
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Subject } from 'rxjs';
import { DataBaseService, Person } from './data-base.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // zainicjowany wartością początkową
  behaviorSubject = new BehaviorSubject<Person[]>([]);
  // nie jest inicjowany wartością początkową
  subject = new Subject<Person[]>();

  // korzystanie z serwisu DataBase - wstrzyknięcie
  constructor(
    private dataBaseService: DataBaseService
  ) 
  {
    // wywołanie metody init po uruchomieniu się konstruktora
    this.init()
  }

    // w trakcie inicjalizacji  na pobierz Persons wywołane jest subscribe(), która będzie odbierała dane i umieszczała jest w dwóch obiektach typu subject
    // private init(): void {
    //   this.dataBaseService.fetchPersons().subscribe(
    //     (persons: Person[]) => {
    //       this.behaviorSubject.next(persons);
    //       this.subject.next(persons);
    //     },
        // logowanie błędów jeśli takie występują
    //     error => console.error(error),
        // jak Observable zakończy pracę
    //     () => console.log('Complete')
    //   );
    // }

    // dodawanie osoby / odwołanie się do metody serwisu addPerson gdzie przekazywany jest obiekt (ta metoda zwraca obiekt typu Observable z aktualną listą)
    // addPerson(person: Person) {
    //   this.dataBaseService.addPerson(person).subscribe(
        // przekazanie wyniku do obiektów
    //     (persons: Person[]) => {
    //       this.behaviorSubject.next(persons);
    //       this.subject.next(persons);
    //     },
        // logowanie błędów jeśli takie występują
    //     error => console.error(error),
        // jak Observable zakończy pracę
    //     () => console.log('Complete')
    //   )
    // }


    // redukcja powyższego kodu

    private init(): void {
      this.dataBaseService.fetchPersons().subscribe(this.observer())
    }

    addPerson(person: Person) {
      this.dataBaseService.addPerson(person).subscribe(this.observer())
    }

    // pozwala na zredukowanie powtarzającego się kodu
    // części funkcji wynikają z interfejsu Observable<T>
    private observer(): Observer<Person[]>{
      return {
        next: (persons: Person[]) => {
          this.behaviorSubject.next(persons);
          this.subject.next(persons);
        },
        error: error => console.error(error),
        complete: () => console.log('Complete')
      }
    }
}
