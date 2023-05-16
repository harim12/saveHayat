import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepThreePageRoutingModule } from './step-three-routing.module';

import { StepThreePage } from './step-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepThreePageRoutingModule
  ],
  declarations: [StepThreePage]
})
export class StepThreePageModule {}
