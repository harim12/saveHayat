import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  checked:boolean;
  checkedTwo:boolean;
  checkedThree:boolean;
  checkedFour:boolean;
  checkedFive:boolean;

  constructor(private dataService:DataService) { 
    this.checked=false;
    this.checkedTwo = false;
    this.checkedThree =false;
    this.checkedFour =false;
    this.checkedFive =false;

  }

  ngOnInit() {
    
  }
  ngDoCheck() {
    this.checked = this.dataService.getChecked();
    this.checkedTwo = this.dataService.getCheckedTwo();
    this.checkedThree = this.dataService.getCheckedThree();
    this.checkedFour = this.dataService.getCheckedFour();
    this.checkedFive = this.dataService.getCheckedFive();
    
  }
}
