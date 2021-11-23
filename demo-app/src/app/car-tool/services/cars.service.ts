import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private baseUrl = "http://localhost:3050/cars";

  constructor(private httpClient: HttpClient) { }

  private getCollectionUrl() {
    return this.baseUrl;
  }

  private getElementUrl(elementId: any) {
    return this.baseUrl + "/" + encodeURIComponent(elementId);
  }

  all() {
    return this.httpClient.get<Car[]>(this.getCollectionUrl());
  }

  append(car: Car) {
    return this.httpClient.post<Car>(this.getCollectionUrl(), car);
  }

  replace(car: Car) {
    return this.httpClient.put<void>(this.getElementUrl(car.id), car);
  }

  remove(carId: number) {
    return this.httpClient.delete<void>(this.getElementUrl(carId));
  }
}
