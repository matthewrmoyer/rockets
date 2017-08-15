import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule, MdButtonToggleModule,  MdMenuModule, MdCheckboxModule, MdCardModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdCheckboxModule,
  ],
  exports: [
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdCheckboxModule,
  ],
  declarations: []
})
export class CustomAngularMaterialModule { }
