import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstPagePageRoutingModule } from './first-page-routing.module';

import { FirstPagePage } from './first-page.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstPagePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [FirstPagePage]
})
export class FirstPagePageModule {}
