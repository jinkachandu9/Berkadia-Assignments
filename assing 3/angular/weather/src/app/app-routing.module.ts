import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CountryComponent } from './country/country.component';
import { DetailsComponent } from './details/details.component';
const routes: Routes = [
  {path:'',redirectTo:'/country',pathMatch:'full'},
  {path:'country',component:CountryComponent},
  {path:'details/:details1',component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
