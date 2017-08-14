import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import appRoutes from './app.routes'

import {LaunchesService} from './launches.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
