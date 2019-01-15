import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { DetailsComponent } from './details/details.component';
import { FacultyAccountComponent } from './faculty-account/faculty-account.component';
import { ControlComponent } from './control/control.component';
const routes: Routes = [
  {path:'',redirectTo:'/applications',pathMatch:'full'},
  {path:'applications',component:ApplicationComponent},
  {path:'students',component:StudentsComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'administrator',component:AdministratorComponent},
  {path:'details',component:DetailsComponent},
  {path:'facultyAccount',component:FacultyAccountComponent},
  {path:'control',component:ControlComponent},
  {path:'**',component:ApplicationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
