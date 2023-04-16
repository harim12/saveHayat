import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderBloodPage } from './order-blood.page';

const routes: Routes = [
  {
    path: '',
    component: OrderBloodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderBloodPageRoutingModule {}
