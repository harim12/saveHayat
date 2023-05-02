import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BloodRequestService } from 'src/app/services/blood-request.service';

@Component({selector: 'app-order-blood', templateUrl: './order-blood.page.html', styleUrls: ['./order-blood.page.scss']})
export class OrderBloodPage implements OnInit {
    bloodRequest : FormGroup;
    bloodTypes = ['A', 'B', 'O', 'AB'];
    selectedbloodType : string;
    bloodSigns = ['+', '-'];
    selectedbloodSign : string;
    selectedBloodGroup : string;
    // gender : string;
    userEmail : string | null;
    formSubmitted = false;
    constructor(private formBuilder : FormBuilder,
                private authService:AuthService,
                private bloodRequestService:BloodRequestService,
                private router:Router) {}


    ngOnInit() {
        this.bloodRequest = this.formBuilder.group({
            bloodGroup: [
                '',
                [this.bloodGroupValidator]
            ],
            amountOfBlood:[
              '',
              [this.amountOfBloodValidator,Validators.required]
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


    // Pour stocker le type du sang choisi
    selectBloodType(bloodType : string) {
        this.selectedbloodType = bloodType;
        console.log(this.selectedbloodType)
        this.selectedBloodGroup = this.selectedbloodType + this.selectedbloodSign;

    }

    //Pour valider le nombre de units de sang entré

    amountOfBloodValidator(control:FormControl){
      const amountOfBloodPattern = /^\d*\s*units?$/;
      const valid  = amountOfBloodPattern.test(control.value);
      return valid? null:  {
        invalidBloodAmount: true
    }; // return null if valid, else return an error object
    }

    // Pour stocker le sign
    selectBloodSign(bloodSign : string) {
        this.selectedbloodSign = bloodSign;
        console.log(this.selectedbloodSign)
        this.selectedBloodGroup = this.selectedbloodType + this.selectedbloodSign;
        console.log(this.selectedBloodGroup)
    }
    // pour entrer le format de blood group valid comme A+ ou A-
    bloodGroupValidator(control : FormControl) {
        const bloodGroupPattern = /^(A|B|AB|O)[+-]$/;      // pattern to match a letter followed by '+' or '-'
        const valid = bloodGroupPattern.test(control.value); // test if the input matches the pattern
        return valid ? null : {
            invalidBloodGroup: true
        }; // return null if valid, else return an error object
    }

    async orderBlood() {
      this.formSubmitted = true;

      this.userEmail = await this.authService.getUserMail();
      this.bloodRequest.value.userId = this.userEmail;
      console.log(this.bloodRequest.value)

      if (this.bloodRequest.valid) {
          this.bloodRequestService.addBloodRequest(this.bloodRequest.value).then((data) => {
              this.bloodRequest.reset();
              this.selectedbloodSign = "";
              this.selectedbloodType = "";
              console.log("valid blood request")
              this.formSubmitted = false;
              this.router.navigate(['/tabs/home-page'])
          }).catch((err) => {
              console.log(err)
          })
      } else {
          this.formSubmitted = true;

      }
  }

  goBack() {
    this.formSubmitted = false;

    this.router.navigate(['/tabs/home-page']);
}
  get firstName() {
    return this.bloodRequest.get('firstName');
  }
  get lastName() {
    return this.bloodRequest.get('lastName');
  }
  get bloodGroup() {
    return this.bloodRequest.get('bloodGroup');
  }
  get phoneNumber() {
    return this.bloodRequest.get('phoneNumber');
  }
  get date() {
    return this.bloodRequest.get('date');
  }
  get hospitalAdress() {
    return this.bloodRequest.get('hospitalAdress');
  }
  get hospitalCity() {
    return this.bloodRequest.get('hospitalCity');
  }
  get gender() {
    return this.bloodRequest.get('gender');
  }
  get amountOfBlood(){
    return this.bloodRequest.get('amountOfBlood');
  }

}
