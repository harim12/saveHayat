import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step-four',
  templateUrl: './step-four.page.html',
  styleUrls: ['./step-four.page.scss'],
})
export class StepFourPage implements OnInit {

  answers=['Yes','No'];
  pregnSelected : string;
  anemiaSelected : string;
  operationSelected:string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  PregnancyAnswer(pregValue : string) {
    this.pregnSelected = pregValue;
    console.log(this.pregnSelected)
    

}
anemiaAnswer(anemia : string) {
  this.anemiaSelected = anemia;
  console.log(this.anemiaSelected)
}
operationAnswer(operation:string){
  this.operationSelected = operation;

}
selectAnswer(answer:string){
  this.operationSelected = answer;

}
  
  allInformationFilled(){
    if(this.anemiaSelected && this.pregnSelected && this.operationSelected){
      return true;
    }
    return false;
  }
  sendData(){
    this.dataService.setCheckedFour('true');
  }

}
