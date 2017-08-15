import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component';
import launchesRoutes from './launches.routes';

// refactor material stuff into its own module
import {MdButtonModule, MdButtonToggleModule, MdCheckboxModule, MdCardModule, MdIconModule} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCheckboxModule,
    MdCardModule,
    MdIconModule,
    launchesRoutes
  ],
  declarations: [LaunchesComponent]
})
export default class LaunchesModule { }
