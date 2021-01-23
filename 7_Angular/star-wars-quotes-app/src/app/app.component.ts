import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star-wars-quotes-app';

  // przechowuje wartość zw. z dodawaniem klasy
  showForm = false
  // metoda zmieniająca wartość przechowywaną w showForm
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }
}
