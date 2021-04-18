import { Injectable } from '@angular/core';
import { WORDS } from '../data/data-base';
import { WordType, Type } from '../data/models';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  // zdefiniowanie tablic jako prywatnych i niewidocznych (do ich wydobycia poniższe metody)
  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];

  constructor() { 
    // zainicjowanie
    this.words = WORDS;
  }

  getWords(): WordType[] {
    return this.words;
  }

  getNouns(): WordType[] {
    return this.nouns;
  }

  getVerbs(): WordType[] {
    return this.verbs;
  }

  addNoun(value: WordType): void {
    this.nouns.push(value);
  }

  addVerb(value: WordType): void {
    this.verbs.push(value);
  }

  check() {
    this.nouns.map(word => (word.correct = word.type === Type.NOUN));
    this.verbs.map(word => (word.correct = word.type === Type.VERB));
  }
}
