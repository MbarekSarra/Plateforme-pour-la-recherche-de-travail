import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {
  errorMessage1:string ='';
  errorMessage:string ='';
  addUserForm: FormGroup ;
  fullname:string
  email : string 
  city : string
  job: string
  phone:string


  userList: AngularFireList<any> 
  constructor(private userService : UserService, public router:Router,
    private db:AngularFireDatabase ,private fire:AngularFireAuth) { 
      
      this.userList = db.list('Agents')
    }

  ngOnInit(): void {
    this.addUserForm=new FormGroup({
      Fullname: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      Email : new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      City: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      Job: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z]+"),
        Validators.minLength(3)
      ]),
     
      PHone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ])
    
    });
  }

  onSubmit() {
 
    let create = 'false';
    
            this.userList.push({
            fullname: this.fullname ,
            email : this.email,
            city:this.city,
            job : this.job  ,
            phone: this.phone,
            
          
              }).then(added =>{
                this.router.navigate(['/agent-liste'])
              
              
             
        
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
