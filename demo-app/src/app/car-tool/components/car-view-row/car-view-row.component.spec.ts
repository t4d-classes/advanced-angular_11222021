import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarViewRowComponent } from './car-view-row.component';

describe('CarViewRowComponent', () => {
  let component: CarViewRowComponent;
  let fixture: ComponentFixture<CarViewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarViewRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarViewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
