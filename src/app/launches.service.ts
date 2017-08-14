import { Injectable } from '@angular/core';

@Injectable()
export class LaunchesService {

  constructor() { }

  async getNext(num: number) {
    console.log('asdf')
    try {
      // const nextTen = await fetch('https://launchlibrary.net/1.1/launch/next/10')
      // const nextTenJSON = await nextTen.json()
      const url: string = 'https://launchlibrary.net/1.1/launch/next/' + num.toString()
      const nextLaunches = await (await fetch(url)).json()

      console.log(url)
      console.log(nextLaunches)
    } catch (error) {
      console.log('Error getting launch data: ' + error)
    }
  }
}
