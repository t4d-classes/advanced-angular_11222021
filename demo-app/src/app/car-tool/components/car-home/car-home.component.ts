import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import { appendCar, removeCar } from '../../car-tool.actions';
import { NewCar } from '../../models/cars';

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

  doAddCar(car: NewCar) {
    this.store.dispatch(appendCar({ car }));
  }

  doDeleteCar(carId: number) {
    this.store.dispatch(removeCar({ carId }));
  }

}
