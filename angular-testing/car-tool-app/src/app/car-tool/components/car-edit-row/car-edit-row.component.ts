import {
  Component, OnInit, Input, Output,
  EventEmitter, ViewChild, ElementRef,
  AfterViewInit,
} from '@angular/core';
import {
  FormBuilder, FormGroup, Validators,
} from '@angular/forms';

import { Car } from '../../models/cars';
import {
  makeInput, modelInput, yearInput,
  colorInput, priceInput,
} from '../../forms/carForm';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: '.app-car-edit-row',
  templateUrl: './car-edit-row.component.html',
  styleUrls: ['./car-edit-row.component.css']
})
export class CarEditRowComponent implements OnInit, AfterViewInit {

  @ViewChild('editMakeInput', { static: true })
  editMakeInputElement!: ElementRef;

  @Input()
  car!: Car;

  @Output()
  saveCar = new EventEmitter<Car>();

  @Output()
  cancelCar = new EventEmitter<void>();

  editCarForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificationSvc: NotificationService,
  ) { }

  ngOnInit() {
    this.editCarForm = this.fb.group({
      make: makeInput(this.car.make),
      model: modelInput(this.car.model),
      year: yearInput(this.car.year),
      color: colorInput(this.car.color),
      price: priceInput(this.car.price),
    });
  }

  ngAfterViewInit() {
    this.editMakeInputElement.nativeElement.focus();
  }

  doSaveCar() {

    if (this.editCarForm.invalid) {
      this.notificationSvc.showErrorNotification([
        'Edit Car Form is Invalid',
        ...Object.keys(this.editCarForm.controls)
          .filter((controlName) => {
            return this.editCarForm.controls[controlName].invalid;
          })
          .map(controlName => {
            return controlName.slice(0, 1).toUpperCase() +
              controlName.slice(1) + ' is invalid';
          }),
      ]);
      return;
    }

    this.saveCar.emit({
      ...this.editCarForm.value,
      id: this.car.id,
    });
  }

  doCancelCar() {
    this.cancelCar.emit();
  }

}
