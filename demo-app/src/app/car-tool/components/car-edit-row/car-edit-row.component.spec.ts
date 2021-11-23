import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditRowComponent } from './car-edit-row.component';

describe('CarEditRowComponent', () => {
  let component: CarEditRowComponent;
  let fixture: ComponentFixture<CarEditRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarEditRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
