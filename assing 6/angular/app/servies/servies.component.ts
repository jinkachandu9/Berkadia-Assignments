import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { MoreServiesComponent } from '../more-servies/more-servies.component';
@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html'
})
export class ServiesComponent implements OnInit {

  constructor(private _router:Router,private readonly router:ActivatedRoute) { }
  ngModule()
  {
  }
  ngOnInit() {
  }
  button1()
  {
    this._router.navigate(['moreservies'] );
  }

}
