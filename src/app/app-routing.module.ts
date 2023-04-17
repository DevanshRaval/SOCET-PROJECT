import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { MeComponent } from './Components/me/me.component';
import { MyTeamComponent } from './Components/my-team/my-team.component';
import { OrgComponent } from './Components/org/org.component';
import { MyHomeComponent } from './Components/my-home/my-home.component';
import { ManageEmpComponent } from './Components/manage-emp/manage-emp.component';
import { EmpAddComponent } from './Components/emp-add/emp-add.component';
import { EmpDeleteComponent } from './Components/emp-delete/emp-delete.component';
import { EmpEditComponent } from './Components/emp-edit/emp-edit.component';
import { EmpViewComponent } from './Components/emp-view/emp-view.component';
import { AdminHomepageComponent } from './Components/admin-homepage/admin-homepage.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children:
      [
        { path: 'me', component: MeComponent },
        { path: 'my-team', component: MyTeamComponent },
        { path: 'org', component: OrgComponent },
        { path: '', component: MyHomeComponent },
        { path: 'my-home', component: MyHomeComponent },
      ]
  },
  { path: 'me', component: MeComponent },
  { path: 'my-team', component: MyTeamComponent },
  { path: 'org', component: OrgComponent },
  { path: 'my-home', component: MyHomeComponent },

  {
    path: 'admin-homepage', component: AdminHomepageComponent,
    children:
      [
        { path: '', component: MyHomeComponent },
        { path: 'my-home', component: MyHomeComponent },
        { path: 'me', component: MeComponent },
        { path: 'my-team', component: MyTeamComponent },
        { path: 'org', component: OrgComponent },
        {
          path: 'manage-emp', component: ManageEmpComponent,
          children: [
            { path: 'emp-add', component: EmpAddComponent },
            { path: 'emp-delete', component: EmpDeleteComponent },
            { path: 'emp-edit', component: EmpEditComponent },
            { path: 'emp-view', component: EmpViewComponent },
          ]
        },
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
