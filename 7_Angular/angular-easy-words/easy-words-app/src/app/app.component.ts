import { Component } from '@angular/core';
import { WordsService } from './services/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easy-words-app';

  constructor(private wordsService: WordsService) {}

  // bezpośredni dostęp do zawartości serwisu
  // getter rzeczowników
  get nouns() {
    return this.wordsService.getNouns()
  }

  // getter czasowników
  get verbs() {
    return this.wordsService.getVerbs()
  }
}
