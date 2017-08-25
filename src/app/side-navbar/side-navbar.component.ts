import { Component, OnInit, HostListener } from '@angular/core';
import { Launch } from '../launches/launch.model'

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {

  launchList;
  windowWidth = window.innerWidth;
  constructor() { }

  toggleSideNav() {
    this.windowWidth = window.innerWidth
    const sn = document.getElementsByClassName('sidenav') as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < sn.length; i++) {
      if (this.windowWidth < 600) {
        sn[i].style.display = 'none'
      } else {
        sn[i].style.display = 'block'
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.toggleSideNav()
  }

  ngOnInit() {
    // refactor to import data from launch service
    this.launchList = Launch.launchList
  }

}
