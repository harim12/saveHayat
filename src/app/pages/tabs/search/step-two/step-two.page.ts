import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.page.html',
  styleUrls: ['./step-two.page.scss'],
})
export class StepTwoPage implements OnInit {
  answers=['Yes','No'];
  diseaseSelected : string;
  chronicSelected : string;
  avcSelected:string;
  transfusionSelected:string;
  answerCancSelected:string;
  constructor(private alertController: AlertController,private dataService: DataService) { }

  ngOnInit() {
    
  }
  
  diseaseAnswer(disease : string) {
    this.diseaseSelected = disease;
    if(this.diseaseSelected==='Yes'){
      this.diseaseSelected = '';
    this.openDialog();
    }    

}
selectTransAnswer(transfusion : string) {
  this.transfusionSelected = transfusion;
  console.log(this.transfusionSelected)
  if(this.transfusionSelected==='Yes'){
    this.transfusionSelected = '';
  this.openDialog2();
  }  

}
chronicAnswer(chronic : string) {
  this.chronicSelected = chronic;
  if(this.chronicSelected==='Yes'){
    this.chronicSelected = '';
  this.openDialog2();
  }   
}
selectAvcAnswer(avc:string){
  this.avcSelected = avc;
  if(this.avcSelected==='Yes'){
    this.avcSelected = '';
  this.openDialog2();
  } 
}
selectAnswer(answer:string){
  this.answerCancSelected = answer;
  if(this.answerCancSelected==='Yes'){
    this.answerCancSelected = '';
  this.openDialog2();
  } 
}
  
  allInformationFilled(){
    if(this.chronicSelected && this.avcSelected && this.diseaseSelected && this.answerCancSelected && this.transfusionSelected){
      return true;
    }
    return false;
  }
  async openDialog() {
    const alert = await this.alertController.create({
      header: 'Sorry, you are not eligible to donate blood. But you can donate your time!',
      message: 'To prevent any risk of contamination, you cannot donate blood because certain diseases can be transmitted through blood.',
      buttons: ['OK'],
      
    });
  
    await alert.present();
  }
  async openDialog2() {
    const alert = await this.alertController.create({
      header: 'Sorry, you are not eligible to donate blood. But you can donate your time!',
      message: 'In accordance with the precautionary principle, you cannot donate blood',
      buttons: ['OK'],
      
    });
  
    await alert.present();
  }

  sendData(){
    this.dataService.setCheckedTwo('true');
  }
}
