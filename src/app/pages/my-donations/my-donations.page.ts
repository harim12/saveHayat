import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donation } from 'src/app/models/donation.model';
import { AuthService } from 'src/app/services/auth.service';
import { DonationService } from 'src/app/services/donation.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-my-donations',
  templateUrl: './my-donations.page.html',
  styleUrls: ['./my-donations.page.scss'],
})
export class MyDonationsPage implements OnInit {
  donations:Donation[];
  userEmail: string | null;

  constructor(private donationService:DonationService,private authService:AuthService,private storage:Storage) { }

  async ngOnInit() {
    // Get the user's email when the component initializes
    console.log("exxecuting the ngOnInit")
    // this.userEmail = await this.authService.getUserMail();
    await this.storage.create();
    this.storage.get('email').then((val) => {
      this.userEmail = val;
      console.log("hada luser email",this.userEmail)
      this.getMyDonations() 
    });
    
  }
  
  async loadUserEmail(){
    this.userEmail = await this.authService.getUserMail();
  }

  getMyDonations(){
  console.log("getting donations")
  this.donationService.getMyDonation(this.userEmail)
  .subscribe((donations: Donation[]) => {
    this.donations = donations;
    console.log(this.donations); // print the result to the console for testing
  });
}
}
