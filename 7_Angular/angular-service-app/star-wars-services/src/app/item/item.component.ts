import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character: any;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

  constructor() { }

  ngOnInit(): void {
    console.log(typeof this.character)
  }

  onAssign(side: string) {
    console.log('item component ->', {name: this.character.name, side: side})
    this.sideAssigned.emit({name: this.character.name, side: side})
  }
}
