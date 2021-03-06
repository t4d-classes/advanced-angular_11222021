import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from 'src/app/app.state';
import {
  appendCarRequest, removeCarRequest, replaceCarRequest,
  editCar, cancelCar, refreshCarsRequest } from '../../car-tool.actions';
import { Car, NewCar } from '../../models/cars';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars$ = this.store.pipe(select(state => state.cars));

  editCarId$ = this.store.pipe(select(state => state.editCarId));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(refreshCarsRequest());
  }

  doAddCar(car: NewCar) {
    this.store.dispatch(appendCarRequest({ car }));
  }

  doSaveCar(car: Car) {
    this.store.dispatch(replaceCarRequest({ car }))
  }

  doDeleteCar(carId: number) {
    this.store.dispatch(removeCarRequest({ carId }));
  }

  doEditCar(carId: number) {
    this.store.dispatch(editCar({ carId }));
  }

  doCancelCar() {
    this.store.dispatch(cancelCar());
  }

}
