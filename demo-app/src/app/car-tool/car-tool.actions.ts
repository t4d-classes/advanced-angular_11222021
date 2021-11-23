import { createAction, props } from '@ngrx/store';

import { Car, NewCar } from './models/cars';

export const refreshCarsRequest = createAction('[Car Tool] Refresh Cars Request');

export const refreshCarsDone = createAction(
  '[Car Tool] Refresh Cars Done', props<{cars: Car[] }>());

export const appendCarRequest = createAction(
  '[Car Tool] Append Car Request', props<{car: NewCar}>());

export const replaceCarRequest = createAction(
  '[Car Tool] Replace Car Request', props<{car: Car}>());

export const removeCarRequest = createAction(
  '[Car Tool] Remove Car Request', props<{carId: number}>());

export const editCar = createAction(
  '[Car Tool] Edit Car', props<{carId: number}>());

export const cancelCar = createAction(
  '[Car Tool] Cancel Car');
    