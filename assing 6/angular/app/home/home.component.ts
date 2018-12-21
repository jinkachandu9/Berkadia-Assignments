import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private _router:Router,private readonly router:ActivatedRoute) { }

  ngOnInit() {
  }
  other()
  {
    console.log("works");
    this._router.navigate(['otherservies']);
  }

}
