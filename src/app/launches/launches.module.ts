import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import launchesRoutes from './launches.routes';
import { LaunchesComponent } from './launches.component';
import { SideNavbarComponent } from '../side-navbar/side-navbar.component'


import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    launchesRoutes
    ],
  declarations: [LaunchesComponent, SideNavbarComponent]
})
export default class LaunchesModule { }
