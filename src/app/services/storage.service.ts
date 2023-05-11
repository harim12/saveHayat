import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // private _storage: Storage | null = null;

  // constructor(private storage:Storage) { 
  //  this.init();
  // }
  // async init() {
  //   // If using, define drivers here: await this.storage.defineDriver(/*...*/);
  //   const storage = await this.storage.create();
  //   this._storage = storage;
  // }
  
  // storeUserEmail(email:string):Promise<any>{
  //   console.log("this is the user mail",email);
  //   return this.storage.set('email',email);
  // }

  // getUserEmail():Promise<any>{
  //   return this.storage.get('email');
  // }

}
