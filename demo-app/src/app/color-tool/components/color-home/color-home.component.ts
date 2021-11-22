import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { Color, NewColor } from '../../models/colors';
import { appendColor } from '../../color-tool.actions';

@Component({
  selector: 'app-color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  colors$ = this.store.pipe(select(state => state.colors));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addColor(color: NewColor) {

    this.store.dispatch(appendColor({ color }))

    // this.colors = [
    //   ...this.colors,
    //   {
    //     ...color,
    //     id: Math.max(...this.colors.map(c => c.id), 0) + 1,
    //   }
    // ];

  }

}
