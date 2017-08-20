import { Component, OnInit } from '@angular/core';
import { Launch} from '../launches/launch.model'

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  launchList;
  constructor() { }

  ngOnInit() {
    console.log(Launch.launchList)
    this.launchList = Launch.launchList
  }

}
