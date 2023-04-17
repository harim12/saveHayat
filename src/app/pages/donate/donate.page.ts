import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {

  bloodTypes = ['A', 'B', 'O', 'AB'];
  selectedbloodType: string;
  bloodSigns = ['+', '-'];
  selectedbloodSign: string;
  selectedBloodGroup:string;
  gender:string;

  //Pour stocker le type du sang choisi
  selectBloodType(bloodType: string) {
    this.selectedbloodType = bloodType;
    console.log(this.selectedbloodType)
    this.selectedBloodGroup = this.selectedbloodType + this.selectedbloodSign;

  }

  //Pour stocker le sign 
  selectBloodSign(bloodSign: string) {
    this.selectedbloodSign = bloodSign;
    console.log(this.selectedbloodSign)
    this.selectedBloodGroup = this.selectedbloodType + this.selectedbloodSign;
    console.log(this.selectedBloodGroup)
  }
  constructor() {
    
   }

  ngOnInit() {
  
}

}
