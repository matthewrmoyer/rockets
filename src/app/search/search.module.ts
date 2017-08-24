import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component'
import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module'

@NgModule({
  imports: [
    CommonModule,
    CustomAngularMaterialModule,
  ],
  declarations: [SearchComponent]
})
export default class SearchModule { }
