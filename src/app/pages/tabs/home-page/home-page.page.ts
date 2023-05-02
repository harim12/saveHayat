import {
    AfterContentChecked,
    Component,
    OnInit,
    ViewChild,
    ViewChildren,
    ViewEncapsulation
} from '@angular/core';

import {Router} from '@angular/router';
import {BloodRequest} from 'src/app/models/bloodRequest.model';
import {AuthService} from 'src/app/services/auth.service';
import {BloodRequestService} from 'src/app/services/blood-request.service';


@Component({selector: 'app-home-page', templateUrl: './home-page.page.html', styleUrls: ['./home-page.page.scss']})


export class HomePagePage {

    router : any;
    userEmail : string | null;
    bloodRequests : BloodRequest[];

    constructor(router : Router, private authService : AuthService, private bloodRequestService : BloodRequestService) {}

    redirectToFindDonors() {
        this.router.navigate(['../find-donors']);
    }

    async ngOnInit() { // Get the user's email when the component initializes
        this.userEmail = await this.authService.getUserMail();
        console.log(this.userEmail);
        this.getBloodRequests();
        console.log(this.bloodRequests)
    }

    // ===============FIND BLOOD REQUESTS IN THE SAME CITY===================
    getBloodRequests() {
        const city = 'oujda'; // replace with desired city

        this.bloodRequestService.getBloodRequests(city).subscribe((bloodRequests : BloodRequest[]) => {
            this.bloodRequests = bloodRequests;
            console.log(bloodRequests); // print the result to the console for testing
        });
    }

}
