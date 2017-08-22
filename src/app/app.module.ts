import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CustomAngularMaterialModule } from './custom-angular-material/custom-angular-material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import {MdButtonModule, MdButtonToggle, MdCheckboxModule, MdCardModule, MdIconModule} from '@angular/material';
import 'hammerjs';
import { CalendarModule } from 'angular-calendar';


import appRoutes from './app.routes'
import {LaunchesService} from './launches.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { FooterComponent } from './footer/footer.component';
// import { RocketCalendarComponent } from './rocket-calendar/rocket-calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideNavbarComponent,
    FooterComponent
    // RocketCalendarComponent,
  ],
  imports: [
    BrowserModule,
    CustomAngularMaterialModule,
    BrowserAnimationsModule,
    appRoutes,
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
