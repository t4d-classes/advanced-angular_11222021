import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { appendCarRequest, refreshCarsDone, refreshCarsRequest, removeCarRequest, replaceCarRequest } from "./car-tool.actions";
import { CarsService } from "./services/cars.service";


@Injectable()
export class CarToolEffects {

  constructor(
    private carsSvc: CarsService,
    private actions$: Actions,
  ) { }

  refreshCars$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(refreshCarsRequest),
      switchMap(() => {
        return this.carsSvc.all().pipe(
          map(cars => refreshCarsDone({ cars }))
        );
      }),
    );
  });

  appendCar$ = createEffect(() => this.actions$.pipe(
    ofType(appendCarRequest),
    switchMap((action) => {
      return this.carsSvc.append(action.car).pipe(
        map(() => refreshCarsRequest())
      );
    }),    
  ));

  replaceCar$ = createEffect(() => this.actions$.pipe(
    ofType(replaceCarRequest),
    switchMap((action) => {
      return this.carsSvc.replace(action.car).pipe(
        map(() => refreshCarsRequest())
      );
    }),    
  ));

  removeCar$ = createEffect(() => this.actions$.pipe(
    ofType(removeCarRequest),
    switchMap((action) => {
      return this.carsSvc.remove(action.carId).pipe(
        map(() => refreshCarsRequest())
      );
    }),    
  ));

}