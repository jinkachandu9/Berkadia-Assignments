import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
})
export class CountryComponent implements OnInit {

  title = 'api';
  constructor(private airservice:WeatherService,private router:Router){}//,private filterPipe:FilterPipe){}
  value:any=false;
  cities=[];
  done=false;
  public name="";
  ngOnInit(){
     this.airservice.fetchApi('https://api.openaq.org/v1/latest?https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22=IN').subscribe((res:any)=>{
         this. value= res.results;
         console.log(res.results);
      for (let k=0;k<this.value.length;k++ ){
        var find=0;
        for(let ele=0 ;ele<this.cities.length;ele++)
        {
             if(this.value[k].city==this.cities[ele]){
               find=1;
               break;
             }
        }
      if(find!=1){
            this.cities.push(this.value[k].city);
      }
    }
    this.done=true;
    });

  }
  onclick(element){
    this.router.navigate(['/details',element]);
  }
}
