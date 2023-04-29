import { Injectable } from '@angular/core';
import {  addDoc, collection, query, where } from "firebase/firestore";
import { Donation } from '../models/donation.model';
import { Firestore, collectionData } from '@angular/fire/firestore';
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
    const q = query(collectionInstance, where('hospitalCity', '==',city));
    return collectionData(q) as Observable<Donation[]>;
  }
    //================================= GET MY DONATIONS ===============================================

    getMyDonation(userId:string){
      const collectionInstance = collection(this.firestore, 'donations');
      const q = query(collectionInstance, where('userId', '==',userId));
      return collectionData(q) as Observable<Donation[]>;
    }
}
