import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.development';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MenubarModule} from 'primeng/menubar';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AgentListeComponent } from './agent-liste/agent-liste.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';


//import { ButtonModule } from 'primeng/button';
//import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ResetpasswordComponent,
    AgentListeComponent,
    ConfirmationDialogComponent,
    UpdateAgentComponent,
    DashboardComponent,
    
    AddAgentComponent,
    AddOffreComponent,
    ListeOffreComponent,
    UpdateOffreComponent,
    ChatComponent,
    
   
   
    

    //ConfirmationDialogComponent,
    //ButtonModule ,
    
   
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MenubarModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTooltipModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
