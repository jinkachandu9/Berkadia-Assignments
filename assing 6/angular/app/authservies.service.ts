import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthserviesService implements CanActivate{
  path;
  route;

  constructor() { }
  canActivate()
  {
    let c=localStorage.getItem("value1");
    if(c=="1")
    return true;
    else
    {
      alert("please login");
    return false;
    }
  }
}
