import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'e2e-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  public newItem = new FormControl();

  public items = [ 'item 1', 'item 2', 'item 3' ];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.items = this.items.concat(this.newItem.value);
    this.newItem.reset();
  }

}
