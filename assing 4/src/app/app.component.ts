import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  title = 'Polling';
  major:number=0;
  party1Value:number=0;
  party2Value:number=0;
  count:string="Not yet checked";
  party1()
  {
    this.party1Value++;
    
  }
  party2()
  {
    this.party2Value++;
    
  }
  counter(count)
  {
    this.count=count;
  }
}
