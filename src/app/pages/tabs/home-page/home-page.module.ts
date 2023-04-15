import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePagePageRoutingModule } from './home-page-routing.module';
import { SwiperModule } from 'swiper/angular';

import { HomePagePage } from './home-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePagePageRoutingModule,
    SwiperModule
  ],
  declarations: [HomePagePage],
})
export class HomePagePageModule {}
