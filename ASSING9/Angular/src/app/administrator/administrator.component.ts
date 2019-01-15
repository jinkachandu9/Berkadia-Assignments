import { Component, OnInit } from '@angular/core';
import { CheckAuthenticationService } from '../check-authentication.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  name:any;
  password:any;
  constructor(public services:CheckAuthenticationService,public router:Router ) { }

  ngOnInit() {
  }
  sendData()
  {
    this.services.checkAdmin(this.name,this.password).subscribe((res:any)=>{;
      let values=Object.values(res);
      console.log(res);
      if(values[0]!=null)
      {
        this.router.navigateByUrl("/control");
      }
      else
      alert("username and password are incorrect");
     });
  }
}
