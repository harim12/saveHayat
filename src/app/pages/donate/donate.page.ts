import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/services/auth.service';
import {DonationService} from 'src/app/services/donation.service';
import { v4 as uuidv4 } from 'uuid';

@Component({selector: 'app-donate', templateUrl: './donate.page.html', styleUrls: ['./donate.page.scss']})
export class DonatePage implements OnInit {

    donation : FormGroup;
    bloodTypes = ['A', 'B', 'O', 'AB'];
    selectedbloodType : string;
    bloodSigns = ['+', '-'];
    selectedbloodSign : string;
    selectedBloodGroup : string;
    userEmail : string | null;
    formSubmitted = false;
    donateTo:string;
    constructor(private formBuilder : FormBuilder,private route:ActivatedRoute, private authService : AuthService, private donationService : DonationService, private router : Router) {}

    ngOnInit() {
        this.initForm();
        this.route.queryParams.subscribe(params=>{
            this.donateTo = params['donateTo'];
        })
        console.log(this.donateTo)
    }

    initForm(){
        this.formSubmitted = false;


        this.donation = this.formBuilder.group({
            id:[uuidv4()],
            bloodGroup: [
                '',
                [this.bloodGroupValidator]
            ],
            donateTo:[
                ''
            ],
            firstName: [
                '',
                [Validators.required]
            ],
            lastName: [
                '',
                [Validators.required]
            ],
            date: [''],
            hospitalAdress: [
                '',
                [Validators.required]
            ],
            hospitalCity: [
                '',
                [Validators.required]
            ],
            userId: [],
            phoneNumber: [
                '',
                [Validators.required]
            ],
            gender: ['', Validators.required]
        })
    }

    async donate() {
        this.formSubmitted = true;

        this.userEmail = await this.authService.getUserMail();
        this.donation.value.userId = this.userEmail;
        console.log(this.donateTo)
        if(this.donateTo!=undefined){
            this.donation.value.donateTo = this.donateTo;
        }
        console.log(this.donation.value)

        if (this.donation.valid) {
            this.donationService.addDonation(this.donation.value).then((data) => {
                this.donation.reset();
                this.selectedbloodSign = "";
                this.selectedbloodType = "";
                this.formSubmitted = false;
                this.router.navigate(['/tabs/home-page'])
            }).catch((err) => {
                console.log(err)
            })
        } else {
            this.formSubmitted = true;

        }
    }

    // pour entrer le format de blood group valid comme A+ ou A-
    bloodGroupValidator(control : FormControl) {
        const bloodGroupPattern = /^(A|B|AB|O)[+-]$/;      // pattern to match a letter followed by '+' or '-'
        const valid = bloodGroupPattern.test(control.value); // test if the input matches the pattern
        return valid ? null : {
            invalidBloodGroup: true
        }; // return null if valid, else return an error object
    }
    // Pour stocker le type du sang choisi
    selectBloodType(bloodType : string) {
        this.selectedbloodType = bloodType;
        this.selectedBloodGroup = this.selectedbloodType + this.selectedbloodSign;

    }

    // Pour stocker le sign
    selectBloodSign(bloodSign : string) {
        this.selectedbloodSign = bloodSign;
        this.selectedBloodGroup = this.selectedbloodType + this.selectedbloodSign;
    }
    showFirstNameError = false;


    onInputBlur(controlName : string) {
        const control = this.donation.get(controlName);
        if (control.touched || control.dirty) {
            this.showFirstNameError = control.invalid && control.errors ?. ['required'];
        } else {
            this.showFirstNameError = false; // Reset the error message
        }
    }
    goBack() {
        this.formSubmitted = false;

        this.router.navigate(['/tabs/home-page']);
    }

    get firstName() {
        return this.donation.get('firstName');
    }
    get lastName() {
        return this.donation.get('lastName');
    }
    get bloodGroup() {
        return this.donation.get('bloodGroup');
    }
    get phoneNumber() {
        return this.donation.get('phoneNumber');
    }
    get date() {
        return this.donation.get('date');
    }
    get hospitalAdress() {
        return this.donation.get('hospitalAdress');
    }
    get hospitalCity() {
        return this.donation.get('hospitalCity');
    }
    get gender() {
        return this.donation.get('gender');
    }

}
