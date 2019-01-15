import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataFetchService } from '../data-fetch.service';
// import { InsertStudentService } from '../insert-student.service';
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  name:any;
  district:any;
  password:any;
  constructor(private readonly data:DataFetchService) { }

  ngOnInit() {
  }
  sendData()
  {
    // console.log("bye");
    this.data. insertStudentTable(this.name,this.district).subscribe((res:any)=>{
      console.log(res);
    });
    this.data.insertStudentLogins(this.name,this.password).subscribe((res:any)=>
    {
      console.log(res);
    });
    alert("Application submitted || Remember password for future references");
    this.name="";
    this.password="";
    this.district="";
  }
}
