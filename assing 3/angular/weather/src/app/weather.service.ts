import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  fetchApi(apiurl:string){ 
   return  this.http.get(apiurl);
  }

}
