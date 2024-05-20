import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { Admin } from '../admin';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent implements OnInit {

   
  id:any
  errorMessage:string ='';
  formGroup: FormGroup;
  errorMessage1:string ='';
  fullname:string
  email:string
  phone:string
  city :string 
  job :string
  userdetails:any= []
  
  userforupdate: AngularFireList<any>

  data = {
   
    fullname : '' ,
    email : '',
    job : '',
    city : ' ',
    phone :  ''  
   } 
    id1: any;
    
  constructor(private router:Router,private firebase: AngularFireDatabase,
    private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe( params => {
      this.id = params
    });
    this.userforupdate = this.firebase.list('Agents');
    
    this.id1 = this.route.snapshot.paramMap.get('id');
    console.log(this.id1)
   }


  ngOnInit(): void {
    this.formGroup=new FormGroup({

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
        Validators.pattern("[A-Za-z ]+"),
        Validators.minLength(3)
      ]),
      PHone: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ])
    
    });
    this.userService.getAgentById(this.id1).subscribe((results) => {
      
      this.getuser(results)
    
    })

  }

  getuser(entries: any[]){
   
    this.userdetails = [];
  
    entries.forEach(element => {
       
       
      let y = element.payload.toJSON()
      y["$key"] = element.key
      this.userdetails.push(y as Admin);
      this.data.city = this.userdetails[0]['city'] 
      this.data.fullname = this.userdetails[0]['fullname'] 
      this.data.email = this.userdetails[0]['email'] 
      this.data.job = this.userdetails[0]['job'] 
      this.data.phone = this.userdetails[0]['phone'] 
     
   })
   console.log("res");
   console.log(this.data.fullname);
   console.log(this.userdetails);
   }

  onSubmit1() {
  
    let create = 'false';
    
     console.log(this.data.phone);
     this.userforupdate.update(this.id1 , {
      job :  this.data.job ,
      email : this.data.email,
      fullname : this.data.fullname  ,
      city :  this.data.city ,
      phone :  this.data.phone
    }).then(added =>{

      
      this.router.navigate(['/agent-liste'])
    
   

}).catch(error=>{
console.error(error)
this.errorMessage1= error.messaage
console.log('error', error)
console.log(error.message)
})
 
  }
}
