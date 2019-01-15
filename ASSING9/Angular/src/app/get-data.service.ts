import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  url="http://localhost:3200/getData";
  url1="http://localhost:3200/inner";
  constructor(private http:HttpClient) { }
  fetchStudentDetails()
  {
    return this.http.get(this.url+"/students");
  }
  fetchFacultyDetails()
  {
    return this.http.get(this.url+"/faculty");
  }
  fetchDisplayData()
  {
    return this.http.get(this.url1);
  }
}
