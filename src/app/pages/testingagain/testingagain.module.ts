import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingagainPageRoutingModule } from './testingagain-routing.module';

import { TestingagainPage } from './testingagain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingagainPageRoutingModule
  ],
  declarations: [TestingagainPage]
})
export class TestingagainPageModule {}
