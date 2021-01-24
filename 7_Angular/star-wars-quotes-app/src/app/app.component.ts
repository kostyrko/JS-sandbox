import { Component } from '@angular/core';
import { QUOTES } from 'src/models/database';
import { Quotation } from 'src/models/quotations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-wars-quotes-app';
  // tablica wpisów podległa interfejsowi
  quotes: Quotation[] = QUOTES
  // pole w komponencie, w którym będą przechowywane dane/wykorzystuje wcześniej zdef. interfejs/ inicjalizacja obiektu z wstępnymi danymi w innym przypadku był by null
  quotation: Quotation = {author: '', sentence: '', votes: 0};
  showForm = false
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
  //metoda,która dodaje quotation na początek listy, następnie resetuje obiekt przechowujący
  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '', sentence: '', votes: 0};
  }

}
