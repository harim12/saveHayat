import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private checked: any;
  private checkedTwo: any;
  private checkedThree: any;
  private checkedFour: any;
  private checkedFive: any;

  constructor() { }
  setChecked(data: any) {
    this.checked = data;
  }
  getChecked() {
    return this.checked;
  }
  setCheckedTwo(data: any) {
    this.checkedTwo = data;
  }
  getCheckedTwo() {
    return this.checkedTwo;
  }
  setCheckedThree(data: any) {
    this.checkedThree = data;
  }
  getCheckedThree() {
    return this.checkedThree;
  }
  setCheckedFour(data: any) {
    this.checkedFour = data;
  }
  getCheckedFour() {
    return this.checkedFour;
  }
  setCheckedFive(data: any) {
    this.checkedFive = data;
  }
  getCheckedFive() {
    return this.checkedFive;
  }
}
