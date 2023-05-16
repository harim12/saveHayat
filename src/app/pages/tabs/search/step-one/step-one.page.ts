import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.page.html',
  styleUrls: ['./step-one.page.scss'],
})
export class StepOnePage implements OnInit {
  
  genders = ['male', 'female'];
  ages = ['- of 18 years','18 to 70 years','71 years and +'];
  weights = ['-of 50kg','+of 50kg'];
  answers=['Yes','No'];
  genderSelected : string;
  ageSelected : string;
  weightSelected:string;
  historySelected:string;
  constructor(private dataService: DataService,private alertController: AlertController) { }

  ngOnInit() {
  }
  
  selectGender(gender : string) {
    this.genderSelected = gender;
    

}
selectAge(age : string) {
  this.ageSelected = age;
  if(this.ageSelected==='- of 18 years'){
    this.ageSelected = '';
    this.openDialog2();
   }
}
selectWeight(weight:string){
  this.weightSelected = weight;
  if(this.weightSelected==='-of 50kg'){
    this.weightSelected ='';
   this.openDialog();
  }
}
selectAnswer(answer:string){
  this.historySelected = answer;
  if(this.historySelected==='Yes'){
    this.historySelected ='';
    this.openDialog3();
   }
   console.log(this.historySelected);
}
allInformationFilled(){
  if(this.ageSelected && this.weightSelected && this.genderSelected && this.historySelected){
    return true;
  }
  return false;
}

sendData(){
  this.dataService.setChecked('true');
}
async openDialog() {
  const alert = await this.alertController.create({
    header: 'Sorry, you are not eligible to donate blood. But you can donate your time!',
    message: 'To safeguard your health, it is not possible to donate blood if you weigh less than 50kg. Do not be disappointed, you have a thousand other ways to support blood donation.',
    buttons: ['OK'],
    
  });

  await alert.present();
}
async openDialog2() {
  const alert = await this.alertController.create({
    header: 'Just a little more patience, you cannot donate blood at the moment !',
    message: 'To donate blood, you must be of legal age and give your consent. Once you turn 18, please visit one of our blood donation centers. Do not hesitate to spread the word about blood donation to others !',
    buttons: ['OK'],
    
  });

  await alert.present();
}
async openDialog3() {
  const alert = await this.alertController.create({
    header: 'You will be able to donate soon!',
    message: 'Your last donation is too recent. To safeguard your health and allow your body to fully recover, you cannot donate blood at the moment!',
    buttons: ['OK'],
    
  });

  await alert.present();
}

}
