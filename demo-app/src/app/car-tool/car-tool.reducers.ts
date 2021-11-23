import { createReducer, on } from '@ngrx/store';

import { Car } from './models/cars';
import {
  appendCar, removeCar, editCar, cancelCar, replaceCar
} from './car-tool.actions';

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
  on(replaceCar, (state, action) => {
    const carIndex = state.findIndex(c => c.id === action.car.id);
    const newCars = [ ...state ];
    newCars[carIndex] = action.car;
    return newCars;
  }),
  on(removeCar, (state, action) => {
    return state.filter(c => c.id !== action.carId);
  }));

export const editCarIdReducer = createReducer<number>(
  -1,
  on(editCar, (_, action) => action.carId),
  on(appendCar, () => -1),
  on(replaceCar, () => -1),
  on(removeCar, () => -1),
  on(cancelCar, () => -1),
);
