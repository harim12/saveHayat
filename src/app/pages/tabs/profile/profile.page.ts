import {Component, OnInit} from '@angular/core';
import {User} from 'src/app/models/user.model';
import {AuthService} from 'src/app/services/auth.service';
import {UserService} from 'src/app/services/user.service';
import {Storage} from '@ionic/storage-angular';
import {MenuController} from '@ionic/angular';
import {BloodRequestService} from 'src/app/services/blood-request.service';
import {BloodRequest} from 'src/app/models/bloodRequest.model';
import {Donation} from 'src/app/models/donation.model';
import { DonationService } from 'src/app/services/donation.service';


@Component({selector: 'app-profile', templateUrl: './profile.page.html', styleUrls: ['./profile.page.scss']})


export class ProfilePage implements OnInit {
    user : User;
    userEmail : string | null;
    menuCtrl : MenuController;
    bloodRequestsLength:number;
    donationsLength:number;

    constructor(private menuController : MenuController,
               private userService : UserService, 
              private authService : AuthService, 
              private storage : Storage,
              private bloodRequestService : BloodRequestService,
              private donationService:DonationService) {}

    async ngOnInit() {
        // Get the user's email when the component initializes
        // this.userEmail = await this.authService.getUserMail();
        await this.storage.create();

        await this.getUserData()

        this.storage.get('email').then((val) => {
            this.userEmail = val;
            console.log("hada luser email", this.userEmail)
            this.getMyBloodRequests();
            this.getMyDonations();
        });

    }
    async getUserData() {
        const email = await this.storage.get('email');

        this.userService.getUserByEmail(email).subscribe((user : User) => {
            this.user = user;
            console.log("hada email :"); // print the result to the console for testing
            console.log(this.user.email);
            console.log('hada user dyalna ', this.user.firstName) // print the result to the console for testing
        });
    }

    getMyBloodRequests() {
        console.log("getting blood Requests")
        this.bloodRequestService.getMyBloodRequests(this.userEmail).subscribe((bloodRequests : BloodRequest[]) => {
            this.bloodRequestsLength = bloodRequests.length;
            console.log(this.bloodRequestsLength);
        });

    }
    getMyDonations(){
      console.log("getting donations")
      this.donationService.getMyDonation(this.userEmail)
      .subscribe((donations: Donation[]) => {
        this.donationsLength = donations.length;
        console.log(this.donationsLength); // print the result to the console for testing
      });
   
}
    logout() {
      this.authService.logout();
    }
}
