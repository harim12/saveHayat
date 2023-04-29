import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donation } from 'src/app/models/donation.model';
import { AuthService } from 'src/app/services/auth.service';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-my-donations',
  templateUrl: './my-donations.page.html',
  styleUrls: ['./my-donations.page.scss'],
})
export class MyDonationsPage implements OnInit {
  donations:Donation[];
  userEmail: string | null;

  constructor(private donationService:DonationService,private authService:AuthService) { }

  async ngOnInit() {
    // Get the user's email when the component initializes
    console.log("exxecuting the ngOnInit")
    this.userEmail = await this.authService.getUserMail();
   
    this.getMyDonations() 
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
