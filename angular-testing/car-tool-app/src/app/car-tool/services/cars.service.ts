import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mapTo, map, concatMap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { NewCar, Car } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  private getCollectionUrl() {
    return `${environment.apiUrl}/cars`;
  }

  private getMemberUrl(resourceId: number) {
    return `${environment.apiUrl}/cars/${encodeURIComponent(resourceId.toString())}`;
  }

  all() {
    return this.httpClient.get<Car[]>(this.getCollectionUrl());
  }

  one(carId: number) {
    return this.httpClient.get<Car>(this.getMemberUrl(carId));
  }

  append(car: NewCar) {
    return this.httpClient.post<Car>(this.getCollectionUrl(), car);
  }

  replace(car: Car) {
    return this.one(car.id!).pipe(
      // using a concat map to start the new observable once the first one is done
      concatMap(oldCar => this.httpClient.put<Car>(this.getMemberUrl(car.id!), car).pipe(mapTo(oldCar)))
    );
  }

  delete(carId: number) {
    return this.one(carId).pipe(
      // using a concat map to start the new observable once the first one is done
      concatMap(oldCar => this.httpClient.delete<Car>(this.getMemberUrl(carId)).pipe(mapTo(oldCar)))
    );
  }
}
