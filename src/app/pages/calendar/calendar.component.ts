import { Component, OnInit } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import ptBr from '@fullcalendar/core/locales/pt-br'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import { Router, RouterLink } from '@angular/router';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { EventService } from 'src/app/services/event/event.service';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  public faClose = faCircleXmark
  public showModal: boolean = false;
  

 
  public form: FormGroup = new FormGroup({
    // date: new FormControl('', Validators.required),
    _id: new FormControl(''),
    time: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    valorConsulta: new FormControl('', Validators.required),
    crp: new FormControl('', ),
    cpfCliente: new FormControl(''),
    mes: new FormControl(''),
    ano: new FormControl(''),
    dia: new FormControl(''),
    realizado: new FormControl(false),
    pago: new FormControl(false),
    data: new FormControl(''),
    meet: new FormControl(''),
    color: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
  })
  

  public calendarOptions: CalendarOptions = {
        
    eventClick: function(info){
      window.location.replace( info.event._def.extendedProps.meet)
    }, 
    eventMouseLeave: function(info){
      
    },
    eventDrop: arg => {
      this.updateEventService(arg)
    },
    eventResize: arg => {
      this.updateEventService(arg)
    },
    dateClick: function(info) {
      console.log(info)
    },
    navLinks: true,
    nowIndicator: true,
    editable: true,
    selectable: true,
    dayMaxEvents: true,
    businessHours: true,
    aspectRatio: 2,
    eventOverlap: false,
    expandRows: true,
    dayMaxEventRows: true,
    droppable: true,
    locale: ptBr,
    initialView: 'timeGridWeek',
    themeSystem: 'standard',
    events: [],
    plugins:[ interactionPlugin, bootstrap5Plugin, timeGridPlugin, dayGridPlugin],
    views: {
      timeGridList: {
        type: 'timeGrid',
        buttonText: 'Dia'
      },
      dayGridMonth:{
        dayMaxEventRows: 3
      }
    },
    headerToolbar: {
      end: 'prev,next,today',
      center: 'dayGridMonth,timeGridWeek,timeGridList'
    },
    buttonText: {
      next: '>',
      prev: '<'
    },
    
  }


  constructor( 
      private router: Router, 
      private eventService: EventService,
    ) { }

  ngOnInit(): void {
    this.eventService.getEvents(localStorage.getItem('crp')).subscribe(res => {
       this.calendarOptions.events = res
      console.log('response ->', res)
    })
  }

  updateEventService(arg: any){
    let start = arg.event.startStr
    let end  = arg.event.endStr 
   

    console.log(start, end)
    let data = moment(start).format('DD/MM/YYYY')
    let dia = moment(start).format('DD')
    let mes = moment(start).format('MM')
    let ano = moment(start).format('YYYY')
    let time = moment(start).format('HH:mm')
    this.form.patchValue({start})
    this.form.patchValue({end})    
    this.form.patchValue(arg.event._def)
    this.form.patchValue(arg.event._def.extendedProps, )
    this.form.patchValue({data: data})
    this.form.patchValue({dia: dia})
    this.form.patchValue({mes: mes})
    this.form.patchValue({ano: ano})
    this.form.patchValue({time: time})
    this.eventService.updateEvent(this.form.value).subscribe(res => {
      
    })
  }
}
