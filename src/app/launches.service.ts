import { Injectable } from '@angular/core';

@Injectable()
export class LaunchesService {

  constructor() { }

  async getNextTen() {
    console.log('asdf')
    try {
      const nextTen = await fetch('https://launchlibrary.net/1.1/launch/next/10')
      const nextTenJSON = await nextTen.json()
      console.log(nextTenJSON)
    } catch (error) {
      console.log('Error getting launch data: ' + error)
    }
  }
}
