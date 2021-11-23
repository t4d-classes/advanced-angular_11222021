import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Car, NewCar } from '../models/cars';
import { CarsService } from './cars.service';

describe('CarsService', () => {

  let carsSvc: CarsService;
  let http: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ CarsService ],
  }));

  beforeEach(() => {
    http = TestBed.inject(HttpTestingController);
    carsSvc = TestBed.inject(CarsService);
  });

  it('should be created', () => {
    const service: CarsService = TestBed.inject(CarsService);
    expect(service).toBeTruthy();
  });

  it('should get all cars', () => {

    const allCarsSpy = jasmine.createSpy();

    const expectedCars: Car[] = [
      { id: 1, make: 'test', model: 'test', year: 2017, color: 'green', price: 10000 },
      { id: 2, make: 'test', model: 'test', year: 2018, color: 'green', price: 20000 },
    ];

    carsSvc.all().subscribe(allCarsSpy);

    const req = http.expectOne('http://localhost:3010/cars');
    expect(req.request.method).toEqual('GET');

    req.flush(expectedCars, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
      statusText: 'OK',
    });

    expect(allCarsSpy).toHaveBeenCalledWith(expectedCars);

  });

  it('should get one car', () => {

    const oneCarSpy = jasmine.createSpy();

    const expectedCar: Car = { id: 1, make: 'test', model: 'test', year: 2017, color: 'green', price: 10000 };

    carsSvc.one(1).subscribe(oneCarSpy);

    const req = http.expectOne('http://localhost:3010/cars/1');
    expect(req.request.method).toEqual('GET');

    req.flush(expectedCar, {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
      statusText: 'OK',
    });

    expect(oneCarSpy).toHaveBeenCalledWith(expectedCar);
  });


  it('should append a car', () => {

    const appendCarSpy = jasmine.createSpy();

    const carToAppend: NewCar = { make: 'test', model: 'test2', year: 1900, color: 'upick', price: 1 };
    const carAppended: Car = { id: 1, ...carToAppend };

    carsSvc.append(carToAppend).subscribe(appendCarSpy);

    const req = http.expectOne('http://localhost:3010/cars');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(carToAppend);

    req.flush(carAppended, {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
      statusText: 'Created',
    });

    expect(appendCarSpy).toHaveBeenCalledWith(carAppended);
  });

  it('should replace a car', () => {

    const replaceCarSpy = jasmine.createSpy();

    const originalCar: Car = { id: 1, make: 'test', model: 'test2', year: 1900, color: 'upick', price: 1 };
    const newCar: Car = { ...originalCar, color: 'red' };

    carsSvc.replace(newCar).subscribe(replaceCarSpy);

    // get the original car
    const req1 = http.expectOne('http://localhost:3010/cars/1');
    expect(req1.request.method).toEqual('GET');

    req1.flush(
      originalCar,
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        statusText: 'OK'
      }
    );

    // put the new car
    const req2 = http.expectOne('http://localhost:3010/cars/1');
    expect(req2.request.method).toEqual('PUT');
    expect(req2.request.body).toEqual(newCar);

    req2.flush(
      newCar,
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        statusText: 'OK'
      }
    );

    // the original car should be the response
    expect(replaceCarSpy).toHaveBeenCalledWith(originalCar);
  });

  it('should delete a car', () => {

    const deleteCarSpy = jasmine.createSpy();

    const originalCar: Car = { id: 1, make: 'test', model: 'test2', year: 1900, color: 'upick', price: 1 };

    carsSvc.delete(originalCar.id!).subscribe(deleteCarSpy);

    // get the original car
    const req1 = http.expectOne('http://localhost:3010/cars/1');
    expect(req1.request.method).toEqual('GET');

    req1.flush(
      originalCar,
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        statusText: 'OK'
      }
    );

    // delete the new car
    const req2 = http.expectOne('http://localhost:3010/cars/1');
    expect(req2.request.method).toEqual('DELETE');

    req2.flush(
      {},
      {
        headers: { 'Content-Type': 'application/json' },
        status: 200,
        statusText: 'OK'
      }
    );

    // the original car should be the response
    expect(deleteCarSpy).toHaveBeenCalledWith(originalCar);
  });

  afterEach(() => {
    http.verify();
  });

});
