import { Component, OnInit } from '@angular/core';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Car, NewCar } from '../../models/cars';
import { CarsService } from '../../services/cars.service';
import { NotificationService } from '../../../shared/services/notification.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  cars: Car[] = [];
  editCarId = -1;

  constructor(
    private carsSvc: CarsService,
    private notificationSvc: NotificationService,
  ) { }

  ngOnInit() {
    this.doRefreshCars();
  }

  doRefreshCars(obs: Observable<any> | null = null) {
    const carsObs = obs
      ? obs.pipe(switchMap(() => this.carsSvc.all()))
      : this.carsSvc.all();

    carsObs.subscribe({ next: cars => {
      this.cars = cars;
      this.editCarId = -1;
    }, error: () => {
      this.notificationSvc.showErrorNotification('Refresh Failed');
    }});
  }

  doAppendCar(car: NewCar) {
    this.doRefreshCars(this.carsSvc.append(car).pipe(
      tap(() => {
        this.notificationSvc.showInfoNotification('Car Added');
      }),
      catchError(() => {
        this.notificationSvc.showErrorNotification('Add Car Failed');
        return of();
      }),
    ));
  }

  doReplaceCar(car: Car) {
    this.doRefreshCars(this.carsSvc.replace(car).pipe(
      tap((oldCar) => {
        this.notificationSvc.showInfoNotification('Car Replaced');
      }),
      catchError(() => {
        this.notificationSvc.showErrorNotification('Replace Car Failed');
        return of();
      }),
    ));
  }

  doDeleteCar(carId: number) {
    this.doRefreshCars(this.carsSvc.delete(carId).pipe(
      tap(() => {
        this.notificationSvc.showInfoNotification('Car Deleted');
      }),
      catchError(() => {
        this.notificationSvc.showErrorNotification('Delete Car Failed');
        return of();
      }),
    ));
  }

  doEditCar(carId: number) {
    this.editCarId = carId;
  }

  doCancelCar() {
    this.editCarId = -1;
  }
}
