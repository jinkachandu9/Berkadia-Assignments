import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  displayData:any;
  tempData:string="not yet posted";
  constructor(private services:GetDataService) { }

  ngOnInit() {
    if(localStorage.key1==1)
    this.getdisplayData();
  }
  getdisplayData()
  {
    this.tempData="Updated list";
    this.services.fetchDisplayData().subscribe((res:any)=>
    {
      console.log(res);
      this.displayData=res;
    })
  }
}
