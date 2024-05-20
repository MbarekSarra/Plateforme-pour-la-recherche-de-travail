import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AgentListeComponent } from './agent-liste/agent-liste.component';
import { UpdateAgentComponent } from './update-agent/update-agent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { ChatComponent } from './chat/chat.component';




const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'resetpassword',component:ResetpasswordComponent},
  {path: 'agent-liste',component:AgentListeComponent},
  {path: 'add-agent', component:AddAgentComponent},
  {path:'update-agent/:id',component:UpdateAgentComponent},
  {path:'dashboard',component:DashboardComponent},
  {path : 'update-offre/:id',component:UpdateOffreComponent},
  {path: 'add-offer', component:AddOffreComponent},
  {path: 'liste-offre', component:ListeOffreComponent},
  {path : 'chat', component:ChatComponent},


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
