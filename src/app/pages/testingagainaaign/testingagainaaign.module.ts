import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestingagainaaignPageRoutingModule } from './testingagainaaign-routing.module';

import { TestingagainaaignPage } from './testingagainaaign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestingagainaaignPageRoutingModule
  ],
  declarations: [TestingagainaaignPage]
})
export class TestingagainaaignPageModule {}
