import { createReducer, on } from '@ngrx/store';

import { Car } from './models/cars';
import {
  appendCarRequest, removeCarRequest, editCar, cancelCar, replaceCarRequest, refreshCarsDone, refreshCarsRequest
} from './car-tool.actions';

const initialCars: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
];

// export const isLoadingReducer = createReducer<boolean>(
//   false,
//   on(refreshCarsRequest, () => true),
//   on(appendCarRequest, () => true),
//   on(replaceCarRequest, () => true),
//   on(removeCarRequest, () => true),
//   on(refreshCarsDone, () => false),
// );

export const carsReducer = createReducer<Car[]>(
  [],
  on(refreshCarsDone, (_, action) => {
    return action.cars;
  }));

export const editCarIdReducer = createReducer<number>(
  -1,
  on(editCar, (_, action) => action.carId),
  on(cancelCar, () => -1),
  on(refreshCarsDone, () => -1),
);
