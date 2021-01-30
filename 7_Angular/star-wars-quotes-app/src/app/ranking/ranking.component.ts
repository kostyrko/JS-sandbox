import { Component, Input } from '@angular/core';
import { Quotation } from 'src/models/quotations';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent {
  @Input()
  quotes: Quotation[];
}
