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

  quotes: Quotation[] = QUOTES

  // przechowuje wartość zw. z dodawaniem klasy
  showForm = false
  // metoda zmieniająca wartość przechowywaną w showForm
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
