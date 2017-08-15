import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import {MdCardModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdButtonToggleModule,  MdMenuModule, MdCheckboxModule, MdIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule
  ],
  exports: [
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule
  ],
  declarations: []
})
export class CustomAngularMaterialModule { }
