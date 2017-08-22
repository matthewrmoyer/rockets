import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import launchesRoutes from './launches.routes';
import { LaunchesComponent } from './launches.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component'


import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module'

@NgModule({
  imports: [
    CommonModule,
    CustomAngularMaterialModule,
    launchesRoutes
    ],
  declarations: [LaunchesComponent, SideNavbarComponent]
})
export default class LaunchesModule { }
