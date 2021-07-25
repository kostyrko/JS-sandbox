import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  // private not accessible outside of class
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Han Solo', side: '' },
    { name: 'Leia Organa', side: '' },
    { name: 'Chewbacca', side: '' },
  ];
  private logService: LogService;

  constructor(logService: LogService){
    this.logService = logService;
  }

  // gets a copy of characters
  getCharacters(chosenList: any) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo: {name: string, side: string}){
    console.log('tabs component ->', charInfo)
    const pos = this.characters.findIndex((char: {name: string, side: string}) => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog('Changed side of ' + charInfo.name + ' to ' + charInfo.side);
  }
}
