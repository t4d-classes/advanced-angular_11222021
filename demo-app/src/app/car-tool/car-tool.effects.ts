import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

import { refreshCarsDone, refreshCarsRequest } from "./car-tool.actions";
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

}