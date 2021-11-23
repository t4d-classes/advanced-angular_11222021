import { createAction, props } from '@ngrx/store';

import { Car, NewCar } from './models/cars';

export const appendCar = createAction(
  '[Car Tool] Append Car', props<{car: NewCar}>());

export const replaceCar = createAction(
  '[Car Tool] Replace Car', props<{car: Car}>());

export const removeCar = createAction(
  '[Car Tool] Remove Car', props<{carId: number}>());

export const editCar = createAction(
  '[Car Tool] Edit Car', props<{carId: number}>());

export const cancelCar = createAction(
  '[Car Tool] Cancel Car');
    