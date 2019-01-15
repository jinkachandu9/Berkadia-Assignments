import { Component, OnInit } from '@angular/core';
import { CheckAuthenticationService } from '../check-authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  name:string;
  password:string;
  constructor(private authentication:CheckAuthenticationService,private router:Router) { }

  ngOnInit() {
  }
  sendData()
  {
    this.authentication.check(this.name,this.password).subscribe((res:any)=>
    {
      let values=Object.values(res);
      if(values[0]!=null)
      {
        this.router.navigateByUrl("/details");
      }
      else
      alert("username and password are incorrect");
    });
  }
}
