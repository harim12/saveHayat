import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail:string;
  constructor(private auth:Auth) { }

  async register(userCrediantials:User){
    try{
      const user = await createUserWithEmailAndPassword(
        this.auth,
        userCrediantials.email,
        userCrediantials.password,
      );
      
      return user;
    }
    catch(e){
      return null;
    }
  }

  async login(userCrediantials:User){
    try{
      const user = await signInWithEmailAndPassword(
        this.auth,
        userCrediantials.email,
        userCrediantials.password
      );
      return user;
    }
    catch(e){
      return null;
    }
  }
  logout(){
    return signOut(this.auth)
  }
  async getUserMail(): Promise<string | null> {
    const user = await this.auth.currentUser;
    return user ? user.email : null;
  }
}
