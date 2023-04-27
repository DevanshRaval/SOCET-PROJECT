import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MeComponent } from './Components/me/me.component';
import { HomeComponent } from './Components/home/home.component';
import { MyTeamComponent } from './Components/my-team/my-team.component';
import { OrgComponent } from './Components/org/org.component';
import { MyHomeComponent } from './Components/my-home/my-home.component';
import { LeaveComponent } from './Components/leave/leave.component';
import { AttendanceComponent } from './Components/attendance/attendance.component';
import { FormsModule } from '@angular/forms';
import { AdminHomepageComponent } from './Components/admin-homepage/admin-homepage.component';
import { ManageEmpComponent } from './Components/manage-emp/manage-emp.component';
import { EmpAddComponent } from './Components/emp-add/emp-add.component';
import { EmpDeleteComponent } from './Components/emp-delete/emp-delete.component';
import { EmpEditComponent } from './Components/emp-edit/emp-edit.component';
import { EmpViewComponent } from './Components/emp-view/emp-view.component';
import { EmpDataService } from './myService/empData.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MeComponent,
    HomeComponent,
    MyTeamComponent,
    OrgComponent,
    MyHomeComponent,
    LeaveComponent,
    AttendanceComponent,
    AdminHomepageComponent,
    ManageEmpComponent,
    EmpAddComponent,
    EmpDeleteComponent,
    EmpEditComponent,
    EmpViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmpDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
