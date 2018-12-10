import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor() {  
  }
  Details()
  {
    return[
      {"name":"chandu","id":"22"},
      {"name":"rahul","id":"30"},
      {"name":"naveen","id":"25"},
      {"name":"raja","id":"40"},
      {"name":"tharun","id":"37"},
      {"name":"bubby","id":"01"},
      {"name":"purna","id":"80"},
    ]
  }
}
