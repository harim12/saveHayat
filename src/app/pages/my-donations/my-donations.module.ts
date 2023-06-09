import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyDonationsPageRoutingModule } from './my-donations-routing.module';

import { MyDonationsPage } from './my-donations.page';

import { IonicStorageModule } from '@ionic/storage-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyDonationsPageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [MyDonationsPage]
})
export class MyDonationsPageModule {}
