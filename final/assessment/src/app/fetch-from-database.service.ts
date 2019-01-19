import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchFromDatabaseService {
  url= "http://localhost:3200/";
  constructor(private readonly http: HttpClient) { }
  get(c) {
    return this.http.get(this.url+c);

  }
  getresult() {
    return this.http.get(this.url);
  }
  submit(sno,ans) {
    console.log("in submitted")
   return this.http.post(this.url+sno+"/"+ans,function(error)
   {
     if(error)
     console.log(error);
     else
     console.log("inserted");
   })
  }
}
