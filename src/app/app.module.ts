import { NgModule } from '@angular/core';
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
    AttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
