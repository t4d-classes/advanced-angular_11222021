import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/cars';

@Component({
  selector: '.app-car-view-row',
  templateUrl: './car-view-row.component.html',
  styleUrls: ['./car-view-row.component.css']
})
export class CarViewRowComponent {

  @Input()
  car!: Car;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  doEditCar() {
    this.editCar.emit(this.car!.id);
  }

  doDeleteCar() {
    this.deleteCar.emit(this.car!.id);
  }

}
