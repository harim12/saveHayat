import { Injectable } from '@angular/core';
import {  addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";
import { Donation } from '../models/donation.model';
import { Firestore, collectionData,getDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class DonationService {

  constructor(private firestore:Firestore) { } 
  
  //================================= ADD DONATION ===============================================
  addDonation(donation:Donation){
    let $donationRef = collection(this.firestore,"donations");
    return addDoc($donationRef,donation);
  }

  //================================= FIND DONORS ===============================================
   findDonors(city: string): Observable<Donation[]> {
    const collectionInstance = collection(this.firestore, 'donations');
    const q = query(collectionInstance, where('hospitalCity', '==',"Oujda"), where('donateTo', '==', ''));
    return collectionData(q) as Observable<Donation[]>;
  }
    //================================= GET MY DONATIONS ===============================================

    getMyDonation(userId:string){
      const collectionInstance = collection(this.firestore, 'donations');
      const q = query(collectionInstance, where('userId', '==',userId));
      return collectionData(q) as Observable<Donation[]>;
    }
    //==============================DELETE DONATION=============================
    deleteDonation(donationId: string){
      const collectionInstance = collection(this.firestore, 'donations');
      const q = query(collectionInstance, where('id', '==', donationId));
      return getDocs(q).then((querySnapshot) => {
        const promises: Promise<void>[] = [];
        querySnapshot.forEach((doc) => {
          promises.push(deleteDoc(doc.ref));
        });
        return Promise.all(promises);
      });
    }
    
   
}