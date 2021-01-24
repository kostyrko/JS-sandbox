import { Component } from '@angular/core';
import { QUOTES } from 'src/models/database';
import { Quotation } from 'src/models/quotations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'star-wars-quotes-app';
  quotes: Quotation[] = QUOTES;
  quotation: Quotation = { author: '', sentence: '', votes: 0 };
  showForm = false;
  onSwitchForm(): void {
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', sentence: '', votes: 0 };
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes += value;
  }
}
