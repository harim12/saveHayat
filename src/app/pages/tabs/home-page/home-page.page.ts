import { AfterContentChecked, Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.page.html',
  styleUrls: ['./home-page.page.scss'],
 
})
export class HomePagePage  {
  router: any;

  constructor(router:Router) { }
  redirectToFindDonors() {
    this.router.navigate(['/tabs/find-donors']);
  }
 

 }
  
