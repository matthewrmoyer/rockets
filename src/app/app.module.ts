import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MdButtonModule, MdButtonToggle, MdCheckboxModule, MdCardModule, MdIconModule} from '@angular/material';
import 'hammerjs';

import appRoutes from './app.routes'
import {LaunchesService} from './launches.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // refactor all material design stuff into own module... https://material.angular.io/guide/getting-started
    MdButtonModule,
    MdCheckboxModule,
    appRoutes
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
