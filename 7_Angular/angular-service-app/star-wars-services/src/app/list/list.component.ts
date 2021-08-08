import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  characters: { name: string; side: string; }[] = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  
  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    // load data when parameter of route changes
    this.activatedRoute.params.subscribe(params => {
      this.characters = this.swService.getCharacters(params.side);
    }) 
  }

}
