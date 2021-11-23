import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../models/cars';

@Component({
  selector: '.app-car-view-row',
  template: '',
})
export class FakeCarViewRowComponent {

  @Input()
  car!: Car;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();
}

@Component({
  selector: '.app-car-edit-row',
  template: '',
})
export class FakeCarEditRowComponent {

  @Input()
  car!: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();
}