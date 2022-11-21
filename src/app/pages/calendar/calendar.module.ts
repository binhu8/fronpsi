import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'
import { AddEventComponent } from '../add-event/add-event.component';
import { AddEventModule } from '../add-event/add-event.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { ProfileModule } from 'src/app/components/profile/profile.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputSearchModule } from './input-search/input-search.module';
import { MatButtonModule } from '@angular/material/button';



FullCalendarModule.registerPlugins([
  dayGridPlugin
])

@NgModule({
  declarations: [
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FullCalendarModule, 
    AddEventModule,
    MenuModule,
    ProfileModule,
    FontAwesomeModule,
    InputSearchModule,
    MatButtonModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CalendarModule { }
