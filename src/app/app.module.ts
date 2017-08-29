import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs';

// import { CalendarModule } from 'angular-calendar';
import { ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from './shared/shared.module'


import appRoutes from './app.routes'
import {LaunchesService} from './launches.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    appRoutes,
    ReactiveFormsModule
  ],
  providers: [LaunchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
