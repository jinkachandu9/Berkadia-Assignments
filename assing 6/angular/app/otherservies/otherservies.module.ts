import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherserviesRoutingModule } from './otherservies-routing.module';
import { OthersComponent } from './others/others.component';

@NgModule({
  declarations: [OthersComponent],
  imports: [
    CommonModule,
    OtherserviesRoutingModule
  ]
})
export class OtherserviesModule {
  constructor()
  {
    console.log("It Works");
  }
 }
