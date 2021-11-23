import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'car-tool',
    loadChildren: () =>
      import('./car-tool/car-tool.module')
        .then(m => m.CarToolModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/car-tool',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
