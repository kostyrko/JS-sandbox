import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  characters: Array<any> = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' },
  ];

  chosenList = 'all';

  constructor() {}

  ngOnInit(): void {}

  onChoose(side: string) {
    this.chosenList = side;
  }

  // gets a copy of characters
  getCharacters() {
    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }

  onSideChosen(charInfo: {name: string, side: string}){
    console.log('tabs component ->', charInfo)
    const pos = this.characters.findIndex(char => {
      return char.name === charInfo.name;
    })
    this.characters[pos].side = charInfo.side;
  }
}
