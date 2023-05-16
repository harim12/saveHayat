import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.page.html',
  styleUrls: ['./step-five.page.scss'],
})
export class StepFivePage implements OnInit {
  answers=['Yes','No'];
  feverSelected : string;
  dentalSelected : string;
  medicationSelected:string;
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

  feverAnswer(fever : string) {
    this.feverSelected = fever;
    console.log(this.feverSelected)
    

}
dentalAnswer(dentalCare : string) {
  this.dentalSelected = dentalCare;
  console.log(this.dentalSelected)
}
medicationAnswer(medication:string){
  this.medicationSelected = medication;

}

  
  allInformationFilled(){
    if(this.dentalSelected && this.feverSelected && this.medicationSelected){
      return true;
    }
    return false;
  }

  sendData(){
    this.dataService.setCheckedFive('true');
  }
}
