import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CheckAuthenticationService {
  url:string="http://localhost:3200/authentication";
  url1:string="http://localhost:3200/authentication/faculty"
  url2:string="http://localhost:3200/authentication/admin";
  constructor(private http:HttpClient) { }
  check(username,password):any
  {
    return this.http.get(this.url+"/"+username+"/"+password);
  }
  checkFaculty(username,password):any{
    return this.http.get(this.url1+"/"+username+"/"+password);
  }
  checkAdmin(username,password):any{
    return this.http.get(this.url2+"/"+username+"/"+password);

  }
  
}
