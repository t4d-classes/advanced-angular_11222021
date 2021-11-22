import { Component, OnInit } from '@angular/core';

import { Color, NewColor } from '../../models/colors';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  colors: Color[] = [
    { id: 1, name: 'red', hexcode: 'ff0000' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addColor(color: NewColor) {

    this.colors = [
      ...this.colors,
      {
        ...color,
        id: Math.max(...this.colors.map(c => c.id), 0) + 1,
      }
    ];

  }

}
