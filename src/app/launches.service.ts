import { Injectable } from '@angular/core';

@Injectable()
export class LaunchesService {

  launchData;

  constructor() { }

  async getNext(num: number) {
    try {
      const url: string = 'https://launchlibrary.net/1.1/launch/next/' + num.toString()
      const nextLaunches = await (await fetch(url)).json()
      this.launchData = nextLaunches
    } catch (error) {
      console.log('Error getting launch data in launch service: ' + error)
    }
  }
}
