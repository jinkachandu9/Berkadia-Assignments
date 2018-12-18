import { Component, OnInit,Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
@Input() party1Value:number;
@Input() party2Value:number;
@Output() output = new EventEmitter<string>();
 count:string;
 //emit the event with the above change event
  //11 will be emitted to the parent  
  constructor() { 
  
  }
  additem()
  {
    if(this.party1Value>this.party2Value)
    this.output.emit("party1");
    else if(this.party2Value>this.party1Value)
    this.output.emit("party2");
    else
    this.output.emit("votes are equal");
  }
  ngOnInit()
  {

  }
  

}
