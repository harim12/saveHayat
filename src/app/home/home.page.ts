import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile=null;
  constructor(
    private authService:AuthService,
    private router:Router,
    private loadingController:LoadingController,
    private alertController:AlertController
  ) {}
  
  async logout(){
    await this.authService.logout()
    this.router.navigateByUrl('/',{replaceUrl:true})
  }

  
}
