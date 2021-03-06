import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line:max-line-length
import {MdCardModule, MdToolbarModule, MdSidenavModule, MdButtonModule, MdButtonToggleModule,  MdMenuModule, MdCheckboxModule, MdIconModule, MdAutocompleteModule} from '@angular/material';
// import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module




@NgModule({
  imports: [
    CommonModule,
    // MdCardModule,
    // MdToolbarModule,
    // MdSidenavModule,
    // MdButtonModule,
    // MdButtonToggleModule,
    // MdMenuModule,
    // MdCheckboxModule,
    // MdIconModule,
    // // ReactiveFormsModule
    // MdAutocompleteModule
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
