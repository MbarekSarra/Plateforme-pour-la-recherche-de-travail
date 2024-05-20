import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OfferService } from '../offer.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent  implements OnInit {
  errorMessage1:string ='';
  errorMessage:string ='';
  addUserForm: FormGroup ;
  fullname:string
  email : string 
  city : string
  job: string
  date : string
  phone:string


  offerList: AngularFireList<any> 
  constructor(private offerservice  : OfferService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth) { 
      
      this.offerList = db.list('Offres')
    }

  ngOnInit(): void {
    this.addUserForm=new FormGroup({
      FUllname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),  
      Email : new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      CIty: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      JOb: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+"),
        Validators.minLength(3)
      ]),
     
      PHOne: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      DATe: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]{4}-[0-9]{2}-[0-9]{2}")
      ]),
    
    });
  }

  onSubmit() {
 
    let create = 'false';
    
            this.offerList.push({
          
          
            fullname: this.fullname ,
            email : this.email,  
            city:this.city,
            job : this.job  ,
            date : this.date,
            phone: this.phone,
          
              }).then(added =>{
                this.router.navigate(['/liste-offre'])
              
              
             
        
    }).catch(error=>{
      console.error(error)
      this.errorMessage1= error.messaage
      console.log('error', error)
      console.log(error.message)
     
    })
    
   /*
    this.condactor = new Conductor(this.lastname,this.firstname,this.phone,this.address);
   
    console.log(this.condactor)
    this.conductorservice.createConductor(this.condactor)
    */
  
  }


}

