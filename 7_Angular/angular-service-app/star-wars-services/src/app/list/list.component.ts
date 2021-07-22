import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {
  @Input() characters: Array<any>;
  // passing the value further - the same than was passed from a child element
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>()


  constructor() { }

  ngOnInit(): void {
  }

  // charInfo is the object $event passed by the - app-item where on change of sideAssign (function below) is triggered
  onSideAssigned(charInfo: {name: string, side: string}) {
    console.log('list component ->', charInfo)
    this.sideAssigned.emit(charInfo)
  }
}
