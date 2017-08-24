import { Component, OnInit } from '@angular/core';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module'


import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTerm = new FormControl()
  constructor() { }

  ngOnInit() {
  }

}
