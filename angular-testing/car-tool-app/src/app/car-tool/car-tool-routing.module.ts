import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarHomeComponent } from './components/car-home/car-home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CarHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarToolRoutingModule { }
