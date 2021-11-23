import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { Car, NewCar } from '../../models/cars';
import { getNativeElement, setFormControl } from '../../utils/test-tools';

import { CarFormComponent } from './car-form.component';

describe('CarFormComponent', () => {
  let component: CarFormComponent;
  let fixture: ComponentFixture<CarFormComponent>;

  const inputCar: NewCar = {
    make: 'Ford',
    model: 'Focus',
    year: 1998,
    color: 'magenta',
    price: 2000,
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormComponent ],
      imports: [ ReactiveFormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit car and reset form when submit button clicked', () => {

    const spy = jasmine.createSpy();

    component.submitCar.subscribe(spy);

    setFormControl(fixture, 'make-input', inputCar.make);
    setFormControl(fixture, 'model-input', inputCar.model);
    setFormControl(fixture, 'year-input', inputCar.year);
    setFormControl(fixture, 'color-input', inputCar.color);
    setFormControl(fixture, 'price-input', inputCar.price);

    const submitButton = getNativeElement<HTMLButtonElement>(fixture, 'button[type=submit]');

    // cannot use dispatch new event, because it will not bubble
    // to the submit event on the form
    submitButton.click();

    // car should be emitted
    expect(spy).toHaveBeenCalledWith(inputCar);

    // car form should be reset
    const { make, model, year, color, price } = component.carForm.value;

    expect(make).toEqual('');
    expect(model).toEqual('');
    expect(year).toEqual(1900);
    expect(color).toEqual('');
    expect(price).toEqual(0);

  });

  it('should fail validation when submit button clicked', () => {

    const spy = jasmine.createSpy();

    component.submitCar.subscribe(spy);

    setFormControl(fixture, 'make-input', inputCar.make);
    setFormControl(fixture, 'model-input', inputCar.model);
    setFormControl(fixture, 'year-input', inputCar.year);
    setFormControl(fixture, 'color-input', inputCar.color);
    setFormControl(fixture, 'price-input', -1);

    const submitButton = getNativeElement<HTMLButtonElement>(fixture, 'button[type=submit]');

    // cannot use dispatch new event, because it will not bubble
    // to the submit event on the form
    submitButton.click();

    // car form should be invalid
    expect(component.carForm.valid).toBe(false);

    // car should be emitted
    expect(spy).toHaveBeenCalledTimes(0);

    // car form should be reset
    const { make, model, year, color, price } = component.carForm.value;

    expect(make).toEqual(inputCar.make);
    expect(model).toEqual(inputCar.model);
    expect(year).toEqual(inputCar.year);
    expect(color).toEqual(inputCar.color);
    expect(price).toEqual(-1);

  });

  it('should reset car form when reset button clicked', () => {

    setFormControl(fixture, 'make-input', inputCar.make);
    setFormControl(fixture, 'model-input', inputCar.model);
    setFormControl(fixture, 'year-input', inputCar.year);
    setFormControl(fixture, 'color-input', inputCar.color);
    setFormControl(fixture, 'price-input', inputCar.price);

    {
      const { make, model, year, color, price } = component.carForm.value;

      expect(make).toBe(inputCar.make);
      expect(model).toBe(inputCar.model);
      expect(year).toBe(inputCar.year);
      expect(color).toBe(inputCar.color);
      expect(price).toBe(inputCar.price);
    }

    const resetButton = getNativeElement<HTMLButtonElement>(fixture, 'button[type=button]');

    // dispatch can be used because there is an event handler defined
    // on the reset button
    resetButton.dispatchEvent(new Event('click'));

    {
      const { make, model, year, color, price } = component.carForm.value;

      expect(make).toEqual('');
      expect(model).toEqual('');
      expect(year).toEqual(1900);
      expect(color).toEqual('');
      expect(price).toEqual(0);
    }

  });

});
