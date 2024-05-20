import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myForm!: FormGroup;
  
  errorMessage: any;
constructor(private fb:FormBuilder,private router:Router,private authservice:AuthService){

}



  ngOnInit(): void {
    this.initForm()
  }
  initForm(){

    this.myForm=this.fb.group({
      firstname:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z]+")


      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern("[a-zA-Z]+")


      ]),

     email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      pasword:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      repeatPassword:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])

    })

    }
  
  get firstname(){
    return this.myForm?.get('firstname')
  }
  get lastname(){
    return this.myForm?.get('lastname')
  }
  get email(){
    return this.myForm?.get('email')
  }
  get pasword(){
    return this.myForm?.get('pasword')
  }
  get repeatPassword(){
    return this.myForm?.get('repeatPassword')
  }
  saveUser()
  {
    const email=this.myForm.get('email').value;
    const pasword=this.myForm.get('pasword').value;
    const repeatPassword=this.myForm.get('repeatPassword').value;
    this.authservice.createNewUser(email,pasword).then(
      () => {
        this.router.navigate(['/postuler']);
      },
      (error) => {
        this.errorMessage=error
        alert("connexion invalide");
        
      }
    )
  }

}