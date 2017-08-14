import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../launches.service';
import { Launch } from './launch.model';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})

export class LaunchesComponent implements OnInit {
  launches
  launchList: object[]


  constructor(private launchesService: LaunchesService) { }

  async getLaunches(num: number) {
    try {
      await this.launchesService.getNext(num)
      this.launches = this.launchesService.launches
    } catch (error) {
      console.log('Error getting launches in launch component: ' + error)
    }
  }

  async ngOnInit() {
    await this.getLaunches(2)
    console.log(this.launches)
  }

}
