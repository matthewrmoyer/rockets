import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CustomAngularMaterialModule
  ],
  declarations: []
})
export class SharedModule { }
