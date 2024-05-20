import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { MessageService } from 'primeng/api';
import { AuthService } from './auth.service';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  isAuth: boolean;
  constructor(private authservice:AuthService,private messageService: MessageService) {
    var firebaseConfig = {
      apiKey: "AIzaSyDO_mUzbjKX2p-P2E9sr1raznAWwcy9qas",
      authDomain: "workhub-1d3b4.firebaseapp.com",
      projectId: "workhub-1d3b4",
      storageBucket: "workhub-1d3b4.appspot.com",
      messagingSenderId: "344706601266",
      appId: "1:344706601266:web:d302292bcfb22a7faa872b",
      measurementId: "G-YHSE2C2Z62"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   }
  

  save() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'HELLO WORLD'});
    
  }
  
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
}
showInfo() {
  this.messageService.add({severity:'info', summary: 'Info', detail: 'Message Content'});
}

showWarn() {
  this.messageService.add({severity:'warn', summary: 'Warn', detail: 'Message Content'});
}

showError() {
  this.messageService.add({severity:'error', summary: 'Error', detail: 'Message Content'});
}

showCustom() {
  this.messageService.add({severity:'custom', summary: 'Custom', detail: 'Message Content', icon: 'pi-file'});
}

showTopLeft() {
  this.messageService.add({key: 'tl', severity:'info', summary: 'Info', detail: 'Message Content'});
}

showTopCenter() {
  this.messageService.add({key: 'tc', severity:'warn', summary: 'Warn', detail: 'Message Content'});
}

showBottomCenter() {
  this.messageService.add({key: 'bc', severity:'success', summary: 'Success', detail: 'Message Content'});
}

showConfirm() {
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
}

showMultiple() {
  this.messageService.addAll([
      {severity:'success', summary:'Message 1', detail:'Message Content'},
      {severity:'info', summary:'Message 2', detail:'Message Content'},
      {severity:'warn', summary:'Message 3', detail:'Message Content'}
  ]);
}

showSticky() {
  this.messageService.add({severity:'info', summary: 'Sticky', detail: 'Message Content', sticky: true});
}

onConfirm() {
  this.messageService.clear('c');
}

onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}
ngOnInit(): void {
  firebase.auth().onAuthStateChanged(
    (user) => {
      if (user) {
        this.isAuth=true;
      } else {
        this.isAuth=false;
      }
    }
  ); 
}

onSignOut() {
  this.authservice.signOutUser();
}
}