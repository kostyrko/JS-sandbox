import { Component, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';
import { WordsService } from 'src/app/services/words.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // przechowuje jedno słowo, wyświetlane w danym momencie
  // ma postać obiektu WordType zdefiniowane w models.ts
  word: WordType = null;

  constructor(
    // wstrzyknięcie komponentu (@Injectable({providedIn: 'root'})) więc tu nie musi być podany w tablicy providers
    // private - dostępny tylko w klasie komponentu // public - html również ma do niego dostęp
    private wordsService: WordsService
  ) { }

  ngOnInit(): void {
    // wywołanie metody w celu pobrania słowa
    this.fetchWord();
  }

  // pobiera element z listy oraz go usuwa (shift())
  private fetchWord(): void {
    this.word = this.wordsService.getWords().shift();
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

  // odwołanie się do metody sprawdzającej poprawność przypisani słów znajdującej się serwisie WordsService
  check(): void {
    this.wordsService.check();
  }
}
