import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepSixPageRoutingModule } from './step-six-routing.module';

import { StepSixPage } from './step-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepSixPageRoutingModule
  ],
  declarations: [StepSixPage]
})
export class StepSixPageModule {}
