import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionPageComponent } from './question-page/question-page.component';
const routes: Routes = [
  {path:"",component:QuestionPageComponent}
 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
