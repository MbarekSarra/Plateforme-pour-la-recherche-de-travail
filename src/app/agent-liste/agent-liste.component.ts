import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { Admin } from '../admin';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-agent-liste',
  templateUrl: './agent-liste.component.html',
  styleUrls: ['./agent-liste.component.css']
})
export class AgentListeComponent implements OnInit{
  displayUpdate: boolean = false;
 
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  fullname:string
  email : string 
  city:string
  job : string
  phone:string
  
  userforupdate: AngularFireList<any>
  data = {
   
    fullname : '' ,
    email : ' ',
    city : '',
    job : '', 
   
    phone :  ''
      
   } 
    id1: any;

userfordelete : AngularFireList<any>; 
listagent: Admin[] = [];

displayAdd: boolean = false;




agentList: AngularFireList<any>

  constructor(private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private userService: UserService,
    private route: ActivatedRoute , 
      private db:AngularFireDatabase ) {
        
      this.agentList = db.list('Agents');

      this.userfordelete = this.firebase.list('Agents');
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.userforupdate = this.firebase.list('Agents');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
    }
  ngOnInit(): void {
    this.userService.getAgents().subscribe((results) => {
      
      this.listUser(results)
   
    })
    
  
  }

  listUser(entries: any[]){
    this.listagent = [];
    entries.forEach(element => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listagent.push(y as Admin);
  })
  console.log(this.listagent);
  }

  openDialog(key: FirebaseOperation): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: "voulez-vous vraiment supprimer ces données?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      
        this.userfordelete.remove(key);
      
     
      }
    });   
  } 
  

  edit(key: string){
    
    this.router.navigate(['update-agent/'+key])
  
  }
  openChat(email: string): void {
    this.router.navigate(['chat', { email: email }]);
  }


}