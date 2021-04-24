import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

  // przechowuje jedno słowo, wyświetlane w danym momencie
  // ma postać obiektu WordType zdefiniowane w models.ts
  word: WordType = null;

  // pobranie listy oraz przypisanie jej w komponencie
  private words = [];
  private subscription: Subscription;

  constructor(
    // wstrzyknięcie komponentu (@Injectable({providedIn: 'root'})) więc tu nie musi być podany w tablicy providers
    // private - dostępny tylko w klasie komponentu // public - html również ma do niego dostęp
    private wordsService: WordsService
  ) { }


  ngOnInit(): void {
    // pobieranie słów i przypisanie fx wpisującej pobrane do listy znajdującje sie w komponencie
    this.subscription = this.wordsService.getWords().subscribe((words: WordType[])=> {
      this.words = words;
      this.fetchWord();
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // pobiera element z listy oraz go usuwa (shift())
  private fetchWord(): void {
    this.word = this.words.shift();
  }

  // dodanie słowa do zbioru (tablicy) nouns znajdującej się serwisie WordsService
  addToNouns(word: WordType): void {
    this.wordsService.addNoun(word);
    this.fetchWord();
  }

  // dodanie słowa do zbioru (tablicy) verbs znajdującej się serwisie WordsService
  addToVerbs(word: WordType): void {
    this.wordsService.addVerb(word);
    this.fetchWord();
  }

}
