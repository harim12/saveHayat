import { Injectable } from '@angular/core';
import {  addDoc, collection, query, where } from "firebase/firestore";
import { Firestore, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { BloodRequest } from '../models/bloodRequest.model';


@Injectable({
  providedIn: 'root'
})
export class BloodRequestService {

  constructor(private firestore:Firestore) { } 
  
  //================================= ADD DONATION ===============================================
  addBloodRequest(bloodRequest:BloodRequest){
    let $donationRef = collection(this.firestore,"bloodRequests");
    return addDoc($donationRef,bloodRequest);
  }

  //================================= FIND DONORS ===============================================
   getBloodRequests(city: string): Observable<BloodRequest[]> {
    const collectionInstance = collection(this.firestore, 'bloodRequests');
    const q = query(collectionInstance, where('hospitalCity', '==',city));
    return collectionData(q) as Observable<BloodRequest[]>;
  }
    //================================= GET MY DONATIONS ===============================================

    getMyBloodRequests(userId:string){
      const collectionInstance = collection(this.firestore, 'donations');
      const q = query(collectionInstance, where('userId', '==',userId));
      return collectionData(q) as Observable<BloodRequest[]>;
    }


}
