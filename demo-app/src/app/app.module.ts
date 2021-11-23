import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';
import { AppComponent } from './app.component';
import { colorsReducer } from './color-tool/color-tool.reducers';
import { carsReducer, editCarIdReducer } from './car-tool/car-tool.reducers';
import { CarToolEffects } from './car-tool/car-tool.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      colors: colorsReducer,
      cars: carsReducer,
      editCarId: editCarIdReducer,
    }),
    EffectsModule.forRoot([ CarToolEffects ]),
    StoreDevtoolsModule.instrument(),
    ColorToolModule,
    CarToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
