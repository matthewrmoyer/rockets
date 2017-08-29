import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketCalendarComponent } from './rocket-calendar.component'
import { SharedModule } from '../shared/shared.module'
import calendarRoutes from './rocket-calendar.routes'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    calendarRoutes
  ],
  declarations: [RocketCalendarComponent]
})
export default class RocketModuleModule { }
