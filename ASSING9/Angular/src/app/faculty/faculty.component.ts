import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckAuthenticationService } from '../check-authentication.service';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  name:string;
  password:string;
  constructor(private router:Router,private check:CheckAuthenticationService) { }

  ngOnInit() {
  }
  createAccount()
  {
    this.router.navigateByUrl("/facultyAccount");
  }
  sendData1()
  {
    this.check.checkFaculty(this.name,this.password).subscribe((res:any)=>{;
    let values=Object.values(res);
    console.log(res);
    if(values[0]!=null)
    {
      this.router.navigateByUrl("/details");
    }
    else
    alert("username and password are incorrect");
   });
  }
}
