import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { MeComponent } from './Components/me/me.component';
import { MyTeamComponent } from './Components/my-team/my-team.component';
import { OrgComponent } from './Components/org/org.component';
import { MyHomeComponent } from './Components/my-home/my-home.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'home', component : HomeComponent},
  {path : 'me', component : MeComponent},
  {path : 'my-team', component : MyTeamComponent},
  {path : 'org', component : OrgComponent},
  {path : 'my-home', component : MyHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
