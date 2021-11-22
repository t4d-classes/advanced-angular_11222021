import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CarHomeComponent } from './components/car-home/car-home.component';
import { CarTableComponent } from './components/car-table/car-table.component';



@NgModule({
  declarations: [
    CarHomeComponent,
    CarTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CarHomeComponent
  ]
})
export class CarToolModule { }
