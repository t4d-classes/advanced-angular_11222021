import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { ColorToolModule } from './color-tool/color-tool.module';
import { CarToolModule } from './car-tool/car-tool.module';
import { AppComponent } from './app.component';
import { colorsReducer } from './color-tool/color-tool.reducers';
import { carsReducer } from './car-tool/car-tool.reducers';

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
    }),
    ColorToolModule,
    CarToolModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
