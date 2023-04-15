import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindDonorsPageRoutingModule } from './find-donors-routing.module';

import { FindDonorsPage } from './find-donors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindDonorsPageRoutingModule
  ],
  declarations: [FindDonorsPage]
})
export class FindDonorsPageModule {}
