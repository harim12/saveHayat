import { Injectable } from '@angular/core';
import {  addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BloodRequest } from '../models/bloodRequest.model';


@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {

  constructor(private firestore:Firestore) { } 
  
  //================================= ADD BLOOD REQUEST ===============================================
  addBloodRequest(bloodRequest:BloodRequest){
    let $donationRef = collection(this.firestore,"bloodRequests");
    return addDoc($donationRef,bloodRequest);
  }

  //================================= GET BLOOD REQUEST===============================================
   getBloodRequests(city: string): Observable<BloodRequest[]> {
    const collectionInstance = collection(this.firestore, 'bloodRequests');
    const q = query(collectionInstance, where('hospitalCity', '==',city));
    return collectionData(q) as Observable<BloodRequest[]>;
  }
    //================================= GET MY BLOOD REQUESTS ===============================================

    getMyBloodRequests(userId:string){
      const collectionInstance = collection(this.firestore, 'bloodRequests');
      const q = query(collectionInstance, where('userId', '==',userId));
      return collectionData(q) as Observable<BloodRequest[]>;
    }
   
    // ============================== DELETE THE BLOOD REQUEST ===========================
    async updateBloodRequest(bloodRequestId: string): Promise<void> {
      const collectionInstance = collection(this.firestore, 'bloodRequests');
      const q = query(collectionInstance, where('id', '==', bloodRequestId));
    
      const bloodRequestDocs = await getDocs(q);
      const promises: Promise<void>[] = [];
    
      bloodRequestDocs.forEach((bloodRequestDoc) => {
        const amountOfBlood = bloodRequestDoc.data()['amountOfBlood'];
        const numberOfUnits = Number(amountOfBlood.split(' ')[0]); // Extract the number of units from the string
        console.log(numberOfUnits)
        const newAmountOfBlood = `${numberOfUnits - 1} units`; // Decrement the number of units by 1 and create a new string
        console.log("the new number",newAmountOfBlood)
        if (numberOfUnits <= 1) {
          promises.push(deleteDoc(bloodRequestDoc.ref)); // Delete the document if the number of units becomes 0
        } else {
          promises.push(updateDoc(bloodRequestDoc.ref, { amountOfBlood: newAmountOfBlood })); // Update the amountOfBlood field with the new value
        }
      });
    
      await Promise.all(promises); // Wait for all the promises to complete
    }
    

}
