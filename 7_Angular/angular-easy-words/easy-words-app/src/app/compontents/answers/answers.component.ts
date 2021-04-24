import { Component, Input, OnInit } from '@angular/core';
import { WordType } from 'src/app/data/models';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent {

  // nazwa listy verbs albo nouns
  @Input() title: string;
  // przytrzyma pojedynczy obiekt
  words: WordType[] = [];

  // tzw setter - odbiera jeden element z Observable (na początku może być pusty)
  @Input() set word(word: WordType) {
    if (word) {
      this.words.push(word);
    }
  }
}
