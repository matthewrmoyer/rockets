import { Injectable } from '@angular/core';

@Injectable()
export class LaunchesService {

  launches;

  constructor() { }

  async getNext(num: number) {
    console.log('asdf')
    try {
      const url: string = 'https://launchlibrary.net/1.1/launch/next/' + num.toString()
      const nextLaunches = await (await fetch(url)).json()
      this.launches = nextLaunches
    } catch (error) {
      console.log('Error getting launch data in launch service: ' + error)
    }
  }
}
