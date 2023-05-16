import { Injectable } from '@angular/core';
import {  addDoc, collection, query, where } from "firebase/firestore";
import { User } from '../models/user.model';

import { DocumentSnapshot, Firestore,collectionData, doc, getDoc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:Firestore) { }
 
  
  getUserByEmail(userEmail: string): Observable<User> {
    const documentInstance = doc(this.firestore, 'users', userEmail);
    return from(getDoc(documentInstance)).pipe(
      map((doc: DocumentSnapshot<User>) => {
        if (doc.exists()) {
          return { id: doc.id, ...doc.data() };
        } else {
          return null;
        }
      })
    );
  }

  getUserByEmailTeste(userId:string){
    const collectionInstance = collection(this.firestore, 'users');
    const q = query(collectionInstance, where('email', '==',userId));
    return collectionData(q) as Observable<User[]>;
  }

async updateUser(email: string,user:User): Promise<void> {
  const collectionInstance = collection(this.firestore, 'users');
  const q = query(collectionInstance, where('email', '==', email));

  const usersDocs = await getDocs(q);
  const promises: Promise<void>[] = [];

  usersDocs.forEach((userInfo) => {
      
    if (user.firstName) {
      promises.push(updateDoc(userInfo.ref, { firstName: user.firstName}));
    }
    if (user.lastName) {
      promises.push(updateDoc(userInfo.ref, { lastName: user.lastName}));
    }
    if (user.gender) {
      promises.push(updateDoc(userInfo.ref, { gender: user.gender}));
    }
    if (user.bloodGroup) {
      promises.push(updateDoc(userInfo.ref, { bloodGroup: user.bloodGroup}));
    }
    if (user.dateBirth) {
      promises.push(updateDoc(userInfo.ref, { dateBirth: user.dateBirth}));
    }
    if (user.phoneNumber) {
      promises.push(updateDoc(userInfo.ref, { phoneNumber: user.phoneNumber}));
    }
    if (user.imageURL) {
      promises.push(updateDoc(userInfo.ref, { imageURL: user.imageURL}));
    }
  });

  await Promise.all(promises); // Wait for all the promises to complete
}
}
