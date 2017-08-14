import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './launches.component';
import launchesRoutes from './launches.routes';

@NgModule({
  imports: [
    CommonModule,
    launchesRoutes
  ],
  declarations: [LaunchesComponent]
})
export default class LaunchesModule { }
