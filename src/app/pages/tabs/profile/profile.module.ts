import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { ProfilePage } from './profile.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()

  ],
  declarations: [ProfilePage]
})
export class ProfilePageModule {}
