import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  log:string;
  constructor() {
    if(localStorage.getItem("value1")=="1")
    {
      
    this.log="logout";
    }
    else{
    this.log="login";
    
    }
   }

  ngOnInit() {
  }
  login()
  {
    if(this.log=="login")
    {
      localStorage.setItem("value1","1");
    this.log="logout";
    }
    else{
    this.log="login";
    localStorage.setItem("value1","0");
    }
  }
  
}
