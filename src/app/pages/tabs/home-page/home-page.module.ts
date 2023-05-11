import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HomePagePage } from './home-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,
    IonicStorageModule.forRoot()
  ],
  declarations: [HomePagePage],
})
export class HomePagePageModule {}
