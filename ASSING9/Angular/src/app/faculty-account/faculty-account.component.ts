import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-account',
  templateUrl: './faculty-account.component.html',
  styleUrls: ['./faculty-account.component.css']
})
export class FacultyAccountComponent implements OnInit {
  name:string;
  place:string;
  password:string;
  collage:string;
  constructor(private services:DataFetchService,public root:Router) { }

  ngOnInit() {
  }
  sendData()
  {
    this.services.insertFacultyLogins(this.name,this.password).subscribe((res:any)=>
    {
      console.log("inserted in facultylogin");
    });
    this.services.insertFaultyTable(this.name,this.collage,this.place).subscribe((res:any)=>
    {
      console.log("inserted in facultyTable");
    });
    alert("created faculty account");
    this.root.navigateByUrl("/faculty");
  }
}
