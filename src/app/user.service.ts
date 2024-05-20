import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Admin } from './admin';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserById(id1: any) {
    throw new Error('Method not implemented.');
  }
   agentListe: AngularFireList<any>

  constructor(private db:AngularFireDatabase) {
    this.agentListe = db.list('Agents')
   }
  
   createUser(user: Admin) {
    
    this.agentListe.push({
   
    fullname: user.fullname ,
    email : user.email,
    city : user.city,
    phone: user.phone ,
    job : user.job,

    
   
    
}).catch(error=>{
console.error(error)

})

}


getAgents() : Observable<any>{
return this.db.list('Agents').snapshotChanges();
}

getAgentById(id:any) : Observable<any>{
  return this.db.list('Agents', ref => ref.orderByKey().equalTo(id)).snapshotChanges();
} 
}
