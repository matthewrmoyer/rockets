import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketCalendarComponent } from './rocket-calendar.component'
import { CustomAngularMaterialModule } from '../custom-angular-material/custom-angular-material.module'
import calendarRoutes from './rocket-calendar.routes'

@NgModule({
  imports: [
    CommonModule,
    CustomAngularMaterialModule,
    calendarRoutes
  ],
  declarations: [RocketCalendarComponent]
})
export default class RocketModuleModule { }
