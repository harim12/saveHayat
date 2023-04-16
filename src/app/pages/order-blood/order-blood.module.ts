import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderBloodPageRoutingModule } from './order-blood-routing.module';

import { OrderBloodPage } from './order-blood.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderBloodPageRoutingModule
  ],
  declarations: [OrderBloodPage]
})
export class OrderBloodPageModule {}
