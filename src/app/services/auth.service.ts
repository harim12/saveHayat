import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import {  addDoc, collection, query, where } from "firebase/firestore";
import { DocumentSnapshot, Firestore, collectionData, doc, getDoc, setDoc } from '@angular/fire/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userEmail:string;
  constructor(private auth:Auth,private router: Router,private firestore:Firestore) { }
  async addUser(firstName:string,lastName:string,email:string){
    try{
      const collectionInstance = collection(this.firestore,'users');
      const docRef = doc(collectionInstance,email);
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
        console.log('User already exists with the email',email);
        return;
      }
      const userData = {
        email:email,
         password:'',
         firstName:firstName,
         lastName:lastName,
         gender: '',
         bloodGroup:'',
         dateBirth:'',
         phoneNumber:'',
         imageURL:''
      };

      await setDoc(docRef, userData);
      console.log('User added successfully!');
    }catch(error){
     console.log('Error adding user : ',error);
    }
  }
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
    return this.auth.signOut().then(() => {
      this.router.navigate(['/']); // Rediriger vers la page d'accueil
    });
  }
  async getUserMail(): Promise<string | null> {
    const user = await this.auth.currentUser;
    return user ? user.email : null;
  }
  
}
