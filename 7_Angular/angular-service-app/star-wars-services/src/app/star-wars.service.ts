export class StarWarsService {
  // private not accessible outside of class
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Han Solo', side: '' },
    { name: 'Leia Organa', side: '' },
    // { name: 'Chewbacca', side: '' },
    // { name: 'R2-D2', side: '' },
    // { name: 'Anakin Skywalker', side: '' },
    // { name: 'Obi-Wan Kenobi', side: '' },
    // { name: 'Mace Windu', side: '' },
    // { name: 'Yoda', side: '' },
    // { name: 'Jango Fett', side: '' },
    // { name: 'Jar Jar Binks', side: '' },
    // { name: 'Greedo', side: '' },
    // { name: 'Palpatine', side: '' },
    // { name: 'Darth Vader', side: '' },
    // { name: 'Count Dooku', side: '' },
    // { name: 'Boba Fett', side: '' },
    // { name: 'Maul', side: '' },
    // { name: 'Ki-Adi-Mundi', side: '' },
  ];

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
  }
}
