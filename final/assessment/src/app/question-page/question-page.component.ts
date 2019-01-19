import { Component, OnInit } from '@angular/core';
import { FetchFromDatabaseService } from '../fetch-from-database.service';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Options } from 'selenium-webdriver/edge';
// import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  options:any=[1,2,3];
  index=0;
  questions:any;
  sno:any;
  option1;
  option2;
  option3;
  option4;
  value;
  constructor(private services:FetchFromDatabaseService) { }
  check(array,c)
  {
    
     return 0;
    
  }
  ngOnInit() {
    // let c=this.getRandomSpan();
    // this.options.push(c);
    this.services.get(this.options[this.index++]).subscribe((res:any)=>
    {
      let values=Object.values(res[0]);
      this.sno=values[0];
      this.questions=values[1];
      this.option1=values[2];
      this.option2=values[3];
      this.option3=values[4];
      this.option4=values[5];
    });
  }
  getRandomSpan = function(){
    return Math.floor((Math.random()*2)+1);
  }
  next()
  {
    if(this.index==3)
    {
      alert("question completed");
    }
    else{
    // let c=this.getRandomSpan();
    this.services.get(this.options[this.index++]).subscribe((res:any)=>
    {
      let values=Object.values(res[0]);
      this.sno=values[0];
      this.sno=values[0];
      this.questions=values[1];
      this.option1=values[2];
      this.option2=values[3];
      this.option3=values[4];
      this.option4=values[5];
    });
  }
  }
  submit(value)
  {
    console.log(value)
    this.services.submit(this.sno,value).subscribe((res:any)=>
    {
      console.log(res);
    });
  }
  result()
  {
    this.services.getresult().subscribe((res:any)=>
    {
      let res1=0;
      for (var x in this.options){
        console.log(res[x]);
      // let values=Object.values(res[x]);
          // console.log(res[x].answer,res[x].userAnswer);
        if(res[x].answer==res[x].userAnswer)
        res1++;
      }
      alert("corret answer"+res1);
    });
  }
}
