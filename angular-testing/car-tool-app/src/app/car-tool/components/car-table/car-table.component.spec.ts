import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { Car } from '../../models/cars';
import { getNativeElement } from '../../utils/test-tools';

import { CarTableComponent } from './car-table.component';
import { FakeCarViewRowComponent, FakeCarEditRowComponent } from '../../fakes/fake-car-rows.component';


describe('CarTableComponent', () => {
  let component: CarTableComponent;
  let fixture: ComponentFixture<CarTableComponent>;

  const cars = [
    {
      id: 1,
      make: 'Ford',
      model: 'Focus',
      year: 1998,
      color: 'magenta',
      price: 2000,
    },
    {
      id: 2,
      make: 'Tesla',
      model: 'S',
      year: 2018,
      color: 'magenta',
      price: 200000,
    },
  ];

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule ],
      declarations: [
        CarTableComponent,
        FakeCarViewRowComponent,
        FakeCarEditRowComponent,
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();

  }));

  it('should create', () => {
    fixture = TestBed.createComponent(CarTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should emit refresh', () => {

    fixture = TestBed.createComponent(CarTableComponent);
    component = fixture.componentInstance;
    component.cars = [];
    component.editCarId = -1;

    fixture.detectChanges();

    const refreshCarsSpy = jasmine.createSpy();

    component.refreshCars.subscribe(refreshCarsSpy);

    const refreshCarsButton = getNativeElement<HTMLButtonElement>(fixture, 'button');
    refreshCarsButton.dispatchEvent(new Event('click'));

    expect(refreshCarsSpy).toHaveBeenCalledTimes(1);
  });

  it('display car table rows', () => {

    fixture = TestBed.createComponent(CarTableComponent);
    component = fixture.componentInstance;
    component.cars = cars;
    component.editCarId = -1;

    fixture.detectChanges();

    const tbodyElement = getNativeElement<HTMLElement>(fixture, 'tbody');

    expect(tbodyElement.childElementCount).toBe(2);
  });

  it('display car edit row', () => {

    fixture = TestBed.createComponent(CarTableComponent);
    component = fixture.componentInstance;
    component.cars = cars;
    component.editCarId = 2;

    fixture.detectChanges();

    const trElement = getNativeElement<HTMLTableRowElement>(fixture, 'tr.app-car-edit-row:nth-child(2)');

    expect(trElement).toBeDefined();
  });


});
