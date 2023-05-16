import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepFourPageRoutingModule } from './step-four-routing.module';

import { StepFourPage } from './step-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepFourPageRoutingModule
  ],
  declarations: [StepFourPage]
})
export class StepFourPageModule {}
