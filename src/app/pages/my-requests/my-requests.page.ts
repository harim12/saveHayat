import { Component, OnInit } from '@angular/core';
import { BloodRequest } from 'src/app/models/bloodRequest.model';
import { Donation } from 'src/app/models/donation.model';
import { AuthService } from 'src/app/services/auth.service';
import { BloodRequestService } from 'src/app/services/blood-request.service';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.page.html',
  styleUrls: ['./my-requests.page.scss'],
})
export class MyRequestsPage implements OnInit {

  bloodRequests:BloodRequest[];
  userEmail: string | null;

  constructor(private bloodRequestService:BloodRequestService,private authService:AuthService,private storage:Storage) { }

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
  this.bloodRequestService.getMyBloodRequests(this.userEmail)
  .subscribe((bloodRequests: BloodRequest[]) => {
    this.bloodRequests = bloodRequests;
    console.log(this.bloodRequests); // print the result to the console for testing
  });
}
}
