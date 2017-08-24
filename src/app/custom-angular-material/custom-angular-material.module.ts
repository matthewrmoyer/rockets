import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import {MdCardModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdButtonToggleModule,  MdMenuModule, MdCheckboxModule, MdIconModule} from '@angular/material';
// import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import {MdAutocompleteModule} from '@angular/material';



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
    MdIconModule,
    // ReactiveFormsModule
    MdAutocompleteModule
  ],
  exports: [
    MdCardModule,
    MdToolbarModule,
    MdSidenavModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdCheckboxModule,
    MdIconModule,
    // ReactiveFormsModule
    MdAutocompleteModule
  ],
  declarations: []
})
export class CustomAngularMaterialModule { }
