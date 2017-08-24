import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SearchComponent } from '../search/search.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, SearchComponent]
})
export default class NavbarModule { }
