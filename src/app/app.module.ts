import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MeComponent } from './Components/me/me.component';
import { HomeComponent } from './Components/home/home.component';
import { MyTeamComponent } from './Components/my-team/my-team.component';
import { OrgComponent } from './Components/org/org.component';
import { MyHomeComponent } from './Components/my-home/my-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MeComponent,
    HomeComponent,
    MyTeamComponent,
    OrgComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
