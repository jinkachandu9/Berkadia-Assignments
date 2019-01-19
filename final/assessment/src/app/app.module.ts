import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuestionPageComponent } from './question-page/question-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FetchFromDatabaseService } from './fetch-from-database.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path:"",component:QuestionPageComponent}
 ];
@NgModule({
  declarations: [
    AppComponent,
    QuestionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
