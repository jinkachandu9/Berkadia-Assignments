import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
  url="http://localhost:3200/";
  constructor(private readonly http:HttpClient) { }
  insertStudentTable(username,password):any{
    return this.http.post(this.url+"students/"+username+"/"+password,function(error)
    {
      console.log(error);
    });}
    insertStudentLogins(username,password){
      return this.http.post(this.url+"studentsLogins/"+username+"/"+password,function(error)
    {
      console.log(error);
    });}
    insertFacultyLogins(username,password)
    {
      return this.http.post(this.url+"facultyLogins/"+username+"/"+password,function(error)
    {
      console.log(error);
    });
    }
    insertFaultyTable(username,collage,place)
    {
      return this.http.post(this.url+"faculty/"+username+"/"+collage+"/"+place,function(error)
    {
      console.log(error);
    });}

  }
