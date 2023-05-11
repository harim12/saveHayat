import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentials:FormGroup;

  constructor(
    private fb:FormBuilder,
    private loadingController:LoadingController,
    private alertController:AlertController,
    private authService:AuthService,
    private router:Router,
    private storage:Storage

  ) { }

  //Easy access for form fields
  get email(){
    return this.credentials.get('email');
  }
  get password(){
    return this.credentials.get('password');
  }

  async ngOnInit() {
    this.credentials = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      firstName:['',Validators.required],
      lastName:['',Validators.required]
    })
    await this.storage.create();

  }

  async register(){
    const loading = await this.loadingController.create();
    await loading.present();
    const user = await this.authService.register(this.credentials.value);
    await loading.dismiss();
    if(user){
      const firstName = this.credentials.value.firstName;
      const lastName = this.credentials.value.lastName;
      const email = this.credentials.value.email;
      this.storage.set('email', this.credentials.value.email);
      this.authService.addUser(firstName,lastName,email)
      this.router.navigateByUrl('/tabs',{replaceUrl:true});
    } else{
      this.showAlert('Registration failed','Please try again')
    }
  }
 
  async showAlert(header,message){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:['OK'],
    })
    await alert.present();
  }
  
}
