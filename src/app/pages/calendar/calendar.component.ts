import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import ptBr from '@fullcalendar/core/locales/pt-br'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import { Router, RouterLink } from '@angular/router';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { EventService } from 'src/app/services/event/event.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public faClose = faCircleXmark
  public showModal: boolean = false

  public calendarOptions: CalendarOptions = {
    customButtons: {
      addEvent: {
        text: '+ Adicionar nova consulta',
        click: ()=> {
          this.showModal = !this.showModal
        }
      }
    },
    locale: ptBr,
    themeSystem: 'bootstrap',
    plugins:[bootstrap5Plugin],
    headerToolbar: {
      end: 'prev,next,today'
    },
    buttonText: {
      next: '>',
      prev: '<'
    },
    events: [
    ]
  }

  constructor( private router: Router, private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents(localStorage.getItem('crp')).subscribe(res => {
     this.calendarOptions.events = res
    })
  }

}
