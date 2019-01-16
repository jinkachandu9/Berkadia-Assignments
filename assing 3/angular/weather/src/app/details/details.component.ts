import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private services:WeatherService) { }
  details1
  name
  maindetails
  res=[]
  array1=[];
  array2=[];
  array3=[];
  convertIntoArray(formData,array1)
  {
    console.log("updated");
    for (var x in formData){
      var str=''
      str+=x+":"+formData[x];
      array1.push(str);
     } 
     console.log("his");
     console.log(array1)
     // this.array1.push(formData);
    // console.log("hi")
    // for (var x in formData)
    // {

    // }

  }
  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id =(params.get("details1"));
      this.details1=id;
      this.services.fetchApi('http://api.openweathermap.org/data/2.5/weather?q='+id+'&appid=27d43832d2a4adcb97fcbfa23db130aa').subscribe((res:any)=>{
      this.name=res.name;
      this.maindetails=res.main;
      this.convertIntoArray(this.maindetails,this.array1);
      this.maindetails=res.weather[0];
      this.convertIntoArray(this.maindetails,this.array2);
      this.maindetails=res.coord;
      this.convertIntoArray(this.maindetails,this.array3); 
      console.log(res);
      });
    });
  }
}
