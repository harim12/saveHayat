import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/models/donation.model';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-find-donors',
  templateUrl: './find-donors.page.html',
  styleUrls: ['./find-donors.page.scss'],
})
export class FindDonorsPage implements OnInit {

  donations: Donation[];

  constructor(private donationService: DonationService) { }

  ngOnInit() {
   this.findDonors();
   
  }

  //===============FIND THE DONORS IN THE SAME CITY===================
 findDonors(){
  const city = 'oujda'; // replace with desired city

  this.donationService.findDonors(city)
    .subscribe((donations: Donation[]) => {
      this.donations = donations;
      console.log(donations); // print the result to the console for testing
    });
 }
}
