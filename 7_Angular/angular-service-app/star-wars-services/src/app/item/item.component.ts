import { Component, OnInit, Input} from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character: any;
  swService: StarWarsService;

  constructor(swService: StarWarsService) { 
    this.swService = swService
  }

  ngOnInit(): void {
    console.log(typeof this.character)
  }

  onAssign(side: string) {
    this.swService.onSideChosen({name: this.character.name, side: side})
  }
}
