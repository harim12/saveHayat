import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.page.html',
  styleUrls: ['./step-three.page.scss'],
})
export class StepThreePage implements OnInit {

  numbers = ['+ 1','0 or 1'];
  answers=['Yes','No'];
  abuseSelected : string;
  tattoSelected : string;
  manySelected:string;
  answerSelected:string;
  constructor(private dataService:DataService, private alertController:AlertController) { }

  ngOnInit() {
  }

  abuseAnswer(abuse : string) {
    this.abuseSelected = abuse;
    if(this.abuseSelected==='Yes'){
      this.abuseSelected = '';
    this.openDialog();
    }

}
tattoAnswer(tatto : string) {
  this.tattoSelected = tatto;
  if(this.tattoSelected==='Yes'){
    this.tattoSelected = '';
  this.openDialog();
  }
}
howManyAnswer(many:string){
  this.manySelected = many;
  if(this.manySelected==='+ 1'){
    this.manySelected = '';
  this.openDialog();
  }

}
 
  allInformationFilled(){
    if(this.tattoSelected && this.manySelected && this.abuseSelected ){
      return true;
    }
    return false;
  }
  sendData(){
    this.dataService.setCheckedThree('true');
  }
  async openDialog() {
    const alert = await this.alertController.create({
      header: 'Sorry, you are not eligible to donate blood. But you can donate your time!',
      message: 'In accordance with the precautionary principle, you cannot donate blood',
      buttons: ['OK'],
      
    });
  
    await alert.present();
  }
}
