import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getNextTen()
  }

}
