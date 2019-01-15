import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { DataFetchService } from './data-fetch.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { DetailsComponent } from './details/details.component';
import { FacultyAccountComponent } from './faculty-account/faculty-account.component';
import { ControlComponent } from './control/control.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    StudentsComponent,
    FacultyComponent,
    AdministratorComponent,
    DetailsComponent,
    FacultyAccountComponent,
    ControlComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
