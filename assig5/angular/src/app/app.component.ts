import { Component } from '@angular/core';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentDetails';
  StudentDetails:any;
  constructor(Details:DetailsService)
  {
    this.StudentDetails=Details.Details();
    console.log(this.StudentDetails)
  }
}
