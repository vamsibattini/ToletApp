import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { ScheduleVisitComponent } from './ScheduleVisit/schedule-visit.component';



@NgModule({
  declarations: [
  
    ScheduleVisitComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
