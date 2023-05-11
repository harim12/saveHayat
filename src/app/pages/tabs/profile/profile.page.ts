import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Storage } from '@ionic/storage-angular';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User;
  userEmail: string | null;
  menuCtrl: MenuController;
  constructor(private menuController: MenuController,private userService:UserService,private authService:AuthService,private storage:Storage) { }

  async ngOnInit() {
    // Get the user's email when the component initializes
    this.userEmail = await this.authService.getUserMail();
    await this.storage.create();
  
    await this.getUserData() 
    console.log('user ',this.user) // print the result to the console for testing
    
  }
  

  
  
  async loadUserEmail(){
    this.userEmail = await this.authService.getUserMail();

  }
   async getUserData(){
    const email = await this.storage.get('email');
    
    this.userService.getUserByEmail(email)
    .subscribe((user: User) => {
      this.user = user;
      console.log("hada email :"); // print the result to the console for testing
      console.log(this.user.email);
      console.log('hada user dyalna ',this.user.firstName) // print the result to the console for testing
    });
  }

  logout() {
    this.authService.logout();
  }
}
