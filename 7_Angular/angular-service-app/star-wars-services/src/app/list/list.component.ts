import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  @Input() characters: Array<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
