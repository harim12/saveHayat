import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepFivePageRoutingModule } from './step-five-routing.module';

import { StepFivePage } from './step-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepFivePageRoutingModule
  ],
  declarations: [StepFivePage]
})
export class StepFivePageModule {}
