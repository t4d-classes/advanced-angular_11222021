import { createReducer, on } from '@ngrx/store';

import { Car } from './models/cars';
import { appendCar, removeCar } from './car-tool.actions';

const initialCars: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
];

export const carsReducer = createReducer<Car[]>(
  initialCars,
  on(appendCar, (state, action) => {

    return [
      ...state,
      {
        ...action.car,
        id: Math.max(...state.map(c => c.id), 0) + 1,
      }
    ];    

  }),
  on(removeCar, (state, action) => {

    return state.filter(c => c.id !== action.carId);

  }));
