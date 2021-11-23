import { createAction, props } from '@ngrx/store';

import { NewCar } from './models/cars';

export const appendCar = createAction(
  '[Car Tool] Append Car', props<{car: NewCar}>());

export const removeCar = createAction(
  '[Car Tool] Remove Car', props<{carId: number}>());
  