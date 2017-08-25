import { Component, OnInit } from '@angular/core';


import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module'

import { Launch } from '../launches/launch.model'

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = new FormControl()
  options: Launch[]
  filteredOptions: Observable<Launch[]>
  constructor() { }

  ngOnInit() {
    this.options = Launch.launchList
    console.log(this.options)

    this.filteredOptions = this.searchTerm.valueChanges
      .startWith(null)
      .map(launch => launch && typeof launch === 'object' ? launch.easyLink : launch)
      .map(easyLink => easyLink ? this.filter(easyLink) : this.options.slice());
  }

   filter(easyLink: string): Launch[] {
      return this.options.filter(option => new RegExp(`^${easyLink}`, 'gi').test(option.easyLink))
   }

  displayFn(launch: Launch): string {
    return launch ? launch.easyLink.toString() : launch.missions[0].toString()
  }

}
