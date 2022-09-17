import { Component } from '@angular/core';import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
7
import ptBr from '@fullcalendar/core/locales/pt-br'
import { EventService } from './services/event/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}