import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';
import { Services } from '@angular/core/src/view';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  studentData:any;
  facultyData:any;
  displayData:any;
  obj;
  constructor(private services:GetDataService) { }

  ngOnInit() {
  }
  getData()
  {

    this.services.fetchStudentDetails().subscribe((res:any)=>
    {
      this.studentData=res;
      this.studentData=this.studentData.bookings;
    });
   
  }
  getFacultyData()
  {
    this.services.fetchFacultyDetails().subscribe((res:any)=>
    {
      this.facultyData=res;
      this.facultyData=this.facultyData.bookings;
    });
  }
  getdisplayData()
  {
    console.log("not getting");
    this.services.fetchDisplayData().subscribe((res:any)=>
    {
      console.log(res);
      this.displayData=res;
    })
  }
  post()
  {
    localStorage.key1=1;
  }
}
