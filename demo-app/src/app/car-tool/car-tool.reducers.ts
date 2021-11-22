import { createReducer } from '@ngrx/store';

import { Car } from './models/cars';

const initialCars: Car[] = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2019, color: 'red', price: 45000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 125000 },
];

export const carsReducer = createReducer<Car[]>(initialCars);
