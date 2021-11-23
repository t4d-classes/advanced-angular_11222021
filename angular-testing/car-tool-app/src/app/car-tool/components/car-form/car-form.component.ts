import {
  Component, OnInit, Input, Output, EventEmitter,
  ViewChild, ElementRef, AfterViewInit,
} from '@angular/core';
import {
  FormBuilder, FormGroup,
} from '@angular/forms';

import { NewCar } from '../../models/cars';
import {
  makeInput, modelInput, yearInput,
  colorInput, priceInput,
} from '../../forms/carForm';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit, AfterViewInit {

  @ViewChild('makeInput', { static: true })
  makeInputElement!: ElementRef;

  @Input()
  headerText = 'Car Form';

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<NewCar>();

  carForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private notificationSvc: NotificationService,
  ) { }

  initialForm() {
    return {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };
  }

  resetCarForm() {
    this.carForm.reset();
    this.carForm.setValue(this.initialForm());
    this.makeInputElement.nativeElement.focus();
  }

  ngOnInit() {
    this.carForm = this.fb.group({
      make: makeInput(),
      model: modelInput(),
      year: yearInput(),
      color: colorInput(),
      price: priceInput(),
    });
  }

  ngAfterViewInit() {
    this.makeInputElement.nativeElement.focus();
  }

  doSubmitCarForm() {

    if (this.carForm.invalid) {
      this.notificationSvc.showErrorNotification([
        'Car Form is Invalid',
        ...Object.keys(this.carForm.controls)
          .filter((controlName) => {
            return this.carForm.controls[controlName].invalid;
          })
          .map(controlName => {
            return controlName.slice(0, 1).toUpperCase() +
              controlName.slice(1) + ' is invalid';
          }),
      ]);

      return;
    }

    this.submitCar.emit({
      ...this.carForm.value,
    });

    this.resetCarForm();
  }

  doResetCarForm() {
    this.resetCarForm();
  }

}
