import { Component, OnInit } from '@angular/core';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module'


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
  options = ['ORS-5', 'Alcomsat-1']
  filteredOptions: Observable<string[]>
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.searchTerm.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.options.slice())
  }

  filter(val: string): string[] {
    return this.options.filter(option => new RegExp(`^${val}`, 'gi').test(option))
  }

}
