import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/app.state';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars$ = this.store.pipe(select(state => state.cars));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

}
