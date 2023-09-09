import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage-angular';
import {BloodRequest} from 'src/app/models/bloodRequest.model';
import {Donation} from 'src/app/models/donation.model';
import {BloodRequestService} from 'src/app/services/blood-request.service';
import {DonationService} from 'src/app/services/donation.service';

@Component({selector: 'app-notifications', templateUrl: './notifications.page.html', styleUrls: ['./notifications.page.scss']})
export class NotificationsPage implements OnInit {
    userEmail : string;
    bloodRequests : BloodRequest[] = [];
    donations : Donation[] = [];
    donatedToMe : Donation[] = [];

    constructor(private router : Router, private storage : Storage, private bloodRequestService : BloodRequestService, private donationsService : DonationService) {}

    async ngOnInit() {
      await this.storage.create();
      const email = await this.storage.get('email');
      this.userEmail = email;
      await this.getMyBloodRequests();
  }
  
    async getMyBloodRequests() { // Executes it second
      console.log('getting blood requests');
      this.bloodRequestService.getMyBloodRequests(this.userEmail)
          .subscribe((bloodRequest : BloodRequest[]) => { // executes it fourth
              this.bloodRequests = bloodRequest;
              console.log('BLOOD REQUESTS INSIDE OF GET BLOOD REQUESTS', this.bloodRequests);
              // Now that the blood requests have been loaded, get the donations
              this.getMyDonations();
    });
  }
  
  async getMyDonations() {
      console.log('getting donations');
      this.donationsService.getMyDonation(this.userEmail).subscribe((donations: Donation[]) => {
          this.donations = donations;
          console.log('donations:', this.donations);
          
          let myRequestsId = this.bloodRequests.map((bloodRequest) => bloodRequest.id);
          console.log("this is request id",myRequestsId);
  
          this.donatedToMe = this.donations.filter((donation) => {
              console.log("this the donation",donation)
              console.log("this is if true or false",myRequestsId.includes(donation.donateTo))
              return (myRequestsId.includes(donation.donateTo));
          });
  
          console.log('donations made to me:', this.donatedToMe);
      });
      
  }
  acceptDonation(donationId:string,donateTo:string){
    //here I delete it from the donation collection in firebase
    this.donationsService.deleteDonation(donationId)
    .then(() => {
        console.log("it s deleting")
        // Find the index of the donation to be deleted
        const index = this.donatedToMe.findIndex(donation => donation.id === donationId);

        // If the donation is found, remove it from the donatedToMe array
        if (index !== -1) {
            this.donatedToMe.splice(index, 1);
        }

    })
    .catch((error) => {
      // handle error
    });
    this.bloodRequestService.updateBloodRequest(donateTo);
  }
  
  



    goBack() {
        this.router.navigate(['/tabs/home-page']);
    }
}
