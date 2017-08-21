import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../launches.service';
import { Launch } from './launch.model';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})

export class LaunchesComponent implements OnInit {
  launches: object[]
  launchList: Launch[]

  constructor(private launchesService: LaunchesService) { }

  async getLaunches(num: number) {
    try {
      await this.launchesService.getNext(num)
      this.launches = this.launchesService.launchData.launches
      return this.launches
    } catch (error) {
      console.log('Error getting launches in launch component: ' + error)
    }
  }

  createLaunches(launches: any[]): Launch[] {
    const tempLaunchArray = []
    launches.forEach(launch => {
      const ln = launch.name
      const el = ln.substr(ln.indexOf('|') + 2)
      const {
        id,
        name,
        windowstart: windowStart,
        windowend: windowEnd,
        vidURLs: streamUrls,
        infoURLs: infoUrls,
        status,
        holdreason: holdReason,
        failreason: failReason,
        location,
        missions,
        rocket,
      } = launch
      // tslint:disable-next-line:max-line-length
      const newLaunch = new Launch(id, name, windowStart, windowEnd, streamUrls, infoUrls, status, holdReason, failReason, location, missions, rocket, el || name)
    })
    this.launchList = Launch.launchList
    return this.launchList
  }

  async ngOnInit() {
    await this.getLaunches(2)
    await this.createLaunches(this.launches)
    console.log(this.launchList)
  }

}
