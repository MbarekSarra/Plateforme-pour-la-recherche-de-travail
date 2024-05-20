import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Offer } from './offer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
 getOfferById(id:string){
  throw new Error('Method not implemented.');
 }
 offerListe: AngularFireList<any>

  constructor(private db:AngularFireDatabase) { 
    this.offerListe = db.list('Offres')
   }
   createOffer(user: Offer) {
    
    this.offerListe.push({
   
      fullname: user.fullname ,
      email : user .email, 
      city : user.city,
      job : user.job,
      date : user.date,
      phone: user.phone ,
    
   
    
}).catch(error=>{
console.error(error)

})
}
getOffers() : Observable<any>{
  return this.db.list('Offres').snapshotChanges();
  }
  
  getOffersById(id:any) : Observable<any>{
    return this.db.list('Offres', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
  } 
}