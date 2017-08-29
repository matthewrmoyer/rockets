import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { SharedModule } from '../shared/shared.module'
import { SearchComponent } from 'app/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NavbarComponent, SearchComponent]
})
export default class NavbarModule { }
