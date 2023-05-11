import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Storage as IonicStorage } from '@ionic/storage-angular';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import {Capacitor} from '@capacitor/core';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  newName: string ;
  lastName:string;
  gender:string;
  newBloodGroup:string;
  dateBirth:string;
  phoneNumber:number;
  user: User;
  formSubmitted = false;
  image:any;
    constructor(private storage:IonicStorage,private storage_:Storage,private userService:UserService,private router: Router) { 
     
    }

  async ngOnInit() {
    this.formSubmitted = false;
    await this.storage.create();
    await this.storage.create();
  
    await this.getUserData();

  }
  async getUserData(){
    const email = await this.storage.get('email');
    
    this.userService.getUserByEmail(email)
    .subscribe((user: User) => {
      this.user = user;
    });
  }



  async updateUserData() {
    const email = await this.storage.get('email');
    
    this.userService.getUserByEmail(email)
      .subscribe(async (user: User) => {
        user.firstName = this.newName;
        user.lastName = this.lastName;
        user.bloodGroup = this.newBloodGroup;
        user.gender = this.gender;
        user.dateBirth = this.dateBirth;
        user.phoneNumber = this.phoneNumber;
        if(this.image){
          user.imageURL = this.image;
        }
        await this.userService.updateUser(email,user);
        this.user = user;
        // Redirect to profile page
        this.router.navigate(['/tabs/profile'], { queryParams: { refresh: true } });
      });
  }
  goBack() {
    this.formSubmitted = false;

    this.router.navigate(['/tabs/profile']);
}

setAvatar() {  
    this.user.imageURL = 'assets/images/avatar.jpg';
  
}


// picture capacitor
async takePicture() {
  try {
    if(Capacitor.getPlatform() != 'web') await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      quality: 90,
      // allowEditing: false,
      source: CameraSource.Prompt,
      width: 600,
      resultType: CameraResultType.DataUrl
    });
    // console.log('image: ', image);
    this.image = image.dataUrl;
   // this.user.imageURL = this.image; // Update the userF imageUrl property with the new URL
    const blob = this.dataURLtoBlob(image.dataUrl);
    const url = await this.uploadImage(blob, image);
    this.user.imageURL = this.image; // Update the userF imageUrl property with the new URL
    // await this.router.navigate(['/tabs/profile'], { queryParams: { refresh: true } });
    
    // console.log(this.user.imageURL);
    
  } catch(e) {
    console.log(e);
  }
}
dataURLtoBlob(dataurl: any) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
}


async uploadImage(blob: any, imageData: any) {
  try {
    const currentDate = Date.now();
    const filePath = `userProfileImages/${currentDate}.${imageData.format}`;
    const fileRef = ref(this.storage_, filePath);
    const user = await uploadBytes(fileRef, blob);
    // console.log('task: ', user);
    const url = getDownloadURL(fileRef);
    return url;
  } catch(e) {
    throw(e);
  }    
}
}
