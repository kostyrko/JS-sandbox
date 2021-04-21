import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from 'src/app/services/data-base.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  persons: Observable<Person[]>;
  

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // przetrzymanie Observable (bez subskrypcji)
    // reszta dzieje się po str html dzięki pipowi async (ten również przy BehavioruSubject pos str html)
    this.persons = this.dataService.subject.asObservable()
  }

  ngOnDestroy(): void {
    
  }
}
