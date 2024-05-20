import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Offer } from '../offer';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OfferService } from '../offer.service';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit{
  displayUpdate: boolean = false;
 
  id:any
  errorMessage:string ='';
  errorMessage1:string =''; 
  
  userforupdate: AngularFireList<any>
  data = {
   
    fullname : '' ,
    email : '',
    city : '',
    job : '', 
    date:  '' ,
    phone :  ''
      
   } 
    id1: any;

userfordelete : AngularFireList<any>; 
listoffer: Offer[] = [];

displayAdd: boolean = false;




offerList: AngularFireList<any>

  constructor(private router:Router, public dialog: MatDialog,
    private firebase: AngularFireDatabase,  private offerService: OfferService,
    private route: ActivatedRoute , 
      private db:AngularFireDatabase ) {
      this.offerList = db.list('Offres');
      this.userfordelete = this.firebase.list('Offres');
      this.route.params.subscribe( params => {
        this.id = params
      });
      this.userforupdate = this.firebase.list('Offres');
      this.id1 = this.route.snapshot.paramMap.get('id');
      console.log(this.id1)
    }
  ngOnInit(): void {
    this.offerService.getOffers().subscribe((results) => {
      
      this.listOffre(results)
   
    })
    
  }

  listOffre(entries: any[]){
    this.listoffer = [];
    entries.forEach(element => {
     let y = element.payload.toJSON()
     y["$key"] = element.key
     this.listoffer.push(y as Offer);
  })
  console.log(this.listoffer);
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
    
    this.router.navigate(['update-offre/'+key])
  
  }
 
  openChat(email: string): void {
    this.router.navigate(['chat', { email: email }]);
  }

}