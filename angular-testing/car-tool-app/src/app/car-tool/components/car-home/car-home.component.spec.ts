import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { Car, NewCar } from '../../models/cars';
import { CarsService } from '../../services/cars.service';
import { CarHomeComponent } from './car-home.component';

describe('CarHomeComponent', () => {
  let component: CarHomeComponent;
  let fixture: ComponentFixture<CarHomeComponent>;

  const cars: Car[] = [
    { id: 1, make: 'test', model: 'test', year: 2017, color: 'green', price: 10000 },
    { id: 2, make: 'test', model: 'test', year: 2018, color: 'green', price: 20000 },
  ];

  const getFakeCarsService = () => ({
    _cars: [...cars],
    all() {
      return of(this._cars);
    },
    one(carId: number) {
      return of(this._cars.find(c => c.id === carId));
    },
    append(car: NewCar) {
      return of(this._cars = this._cars.concat({
        ...car, id: Math.max(...cars.map(c => c.id!), 0) + 1,
      }));
    },
    replace(car: Car) {
      const carIndex = this._cars.findIndex(c => c.id === car.id);
      const newCars = this._cars.concat();
      newCars[carIndex] = car;
      return of(this._cars = newCars);
    },
    delete(carId: number) {
      return of(this._cars = this._cars.filter(c => c.id !== carId));
    },
  });

  let fakeCarsService: any;

  beforeEach(async(() => {

    fakeCarsService = getFakeCarsService();

    spyOn(fakeCarsService, 'all').and.callThrough();
    spyOn(fakeCarsService, 'append').and.callThrough();
    spyOn(fakeCarsService, 'replace').and.callThrough();
    spyOn(fakeCarsService, 'delete').and.callThrough();

    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule, ],
      declarations: [
        CarHomeComponent,
      ],
      providers: [ { provide: CarsService, useValue: fakeCarsService } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh cars', () => {
    component.doRefreshCars();
    fixture.detectChanges();
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(2);
  });

  it('should append car', () => {

    const car: NewCar = { make: 'test', model: 'test', year: 2002, color: 'red', price: 100 };

    component.doAppendCar(car);
    fixture.detectChanges();

    expect(fakeCarsService.append).toHaveBeenCalledWith(car);
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(3);
  });

  it('should replace car', () => {

    const car: Car = { id: 2, make: 'test', model: 'test', year: 2002, color: 'red', price: 100 };

    component.doReplaceCar(car);
    fixture.detectChanges();

    expect(fakeCarsService.replace).toHaveBeenCalledWith(car);
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(2);
    expect(component.cars.find(c => c.id === car.id)!.color).toBe('red');
  });

  it('should delete car', () => {

    const carId = 2;

    component.doDeleteCar(carId);

    expect(fakeCarsService.delete).toHaveBeenCalledWith(carId);
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(1);
    expect(component.cars.filter(c => c.id === carId).length).toBe(0);
  });

  it('edit car', () => {
    component.doEditCar(2);
    expect(component.editCarId).toBe(2);
  });

  it('cancel car', () => {
    component.doCancelCar();
    expect(component.editCarId).toBe(-1);
  });

});
