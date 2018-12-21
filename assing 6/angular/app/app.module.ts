import { BrowserModule } from '@angular/platform-browser';
import { Router,RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiesComponent } from './servies/servies.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoreServiesComponent } from './more-servies/more-servies.component';
import { AuthserviesService } from './authservies.service';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ServiesComponent,
    HomeComponent,
    PageNotFoundComponent,
    MoreServiesComponent,
    LoginComponent,
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path:'',redirectTo:'home',pathMatch:"full"},
        {path:'home',component:HomeComponent},
        {path:'servies',component:ServiesComponent,canActivate:[AuthserviesService]},
        {path:'moreservies',component:MoreServiesComponent},
        {path:'otherservies',loadChildren:'./otherservies/otherservies.module#OtherserviesModule'},
        {path:'login',component: LoginComponent},
        {path:'**',component:PageNotFoundComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
