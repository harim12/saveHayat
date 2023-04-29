import { AfterContentChecked, Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
 
})
export class HomePagePage  {
  router: any;
  userEmail: string | null;
  constructor(router:Router,private authService: AuthService) { }
  redirectToFindDonors() {
    this.router.navigate(['../find-donors']);
  }
  async ngOnInit() {
    // Get the user's email when the component initializes
    this.userEmail = await this.authService.getUserMail();
    console.log(this.userEmail);
  }

 }
  
