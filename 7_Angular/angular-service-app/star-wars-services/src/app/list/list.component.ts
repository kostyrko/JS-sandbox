import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit, OnDestroy {
  characters: { name: string; side: string; }[] = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  // all by default and changes depend on the loaded side
  loadedSide: string = 'all'
  // unsubscribe from own observables as it will not be destroyed with the component as is its own object
  subscription: Subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit(): void {
    // load data when parameter of route changes
    // params of the activatedRoute is an observable and by default it can be subscribed
    this.activatedRoute.params.subscribe(params => {
      this.characters = this.swService.getCharacters(params.side);

      this.loadedSide = params.side;
    });
    this.subscription = this.swService.charactersChange.subscribe(
      () => {
        // get the characters for the currently loaded list
        this.characters = this.swService.getCharacters(this.loadedSide);
      }
    )
  }

  // remove subscription to prevent memory leak
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
