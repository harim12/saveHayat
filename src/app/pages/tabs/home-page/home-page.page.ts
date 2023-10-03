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
import { Storage } from '@ionic/storage-angular';
import {BloodRequestService} from 'src/app/services/blood-request.service';

@Component({selector: 'app-home-page', templateUrl: './home-page.page.html', styleUrls: ['./home-page.page.scss']})


export class HomePagePage {

    router : any;
    userEmail : string | null;
    bloodRequests : BloodRequest[];

    constructor(router : Router, 
                private authService : AuthService,
                private bloodRequestService : BloodRequestService,
                private storage:Storage) {}

    redirectToFindDonors() {
        this.router.navigate(['../find-donors']);
    }

    async ngOnInit() { // Get the user's email when the component initializes
        await this.storage.create();
        //this.userEmail = await this.authService.getUserMail();
        // Get the variable from storage
        this.storage.get('email').then((val) => {
            console.log(val)
        });
        this.getBloodRequests();
    }

    // ===============FIND BLOOD REQUESTS IN THE SAME CITY===================
    getBloodRequests() {
        const city = 'Oujda'; // replace with desired city

        this.bloodRequestService.getBloodRequests(city).subscribe((bloodRequests : BloodRequest[]) => {
            this.bloodRequests = bloodRequests;     
            console.log("this is inside the home page",this.bloodRequests)      
        });
        
        
    }


}
