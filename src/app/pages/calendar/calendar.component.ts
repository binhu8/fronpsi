import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/angular';
import ptBr from '@fullcalendar/core/locales/pt-br'
import bootstrap5Plugin from '@fullcalendar/bootstrap5'
import { ChildActivationStart, Router, RouterLink } from '@angular/router';
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
  showModalEvent: boolean =false

  @HostListener('document:click', ['$event.target']) clickout(target: any){
    if(this.el?.nativeElement.contains(target)){
      console.log('clicou no elemento')
      return
    }else{
      if(target.classList.contains('fc-event-time') || target.classList.contains('fc-event-title') ){
        this.showModal = false
        return
      }else{
        console.log(target)
        this.showModalEvent = false
      }
    } 
  }

  @HostListener('scroll', ['$event']) scrollWindow(event: any){
    this.showModalEvent = false
  }

  @ViewChild('teste', {static: false} ) set content(content: ElementRef){
    if(content){
      this.el = content
      this.testeEventclick(this.event)
    }
  }
  el!: ElementRef
  faClose = faCircleXmark
  showModal: boolean = false;
  event: any = {}

 
  form: FormGroup = new FormGroup({
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
  

   calendarOptions: CalendarOptions = {
        
    eventClick: info => {
      // window.location.replace( info.event._def.extendedProps.meet)
      if(this.showModalEvent){
        this.showModalEvent = false
        this.testeEventclick(info)
        this.event = info
      }else{
        this.showModalEvent = true
        this.event = info
      }
    }, 
    eventMouseLeave: function(info){
      
    },
    eventDrop: arg => {
      this.updateEventService(arg)
    },
    eventResize: arg => {
      this.updateEventService(arg)
    },
    dateClick: info => {
      
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
    })

  }


  testeEventclick(element: any){
    this.showModalEvent = true
    this.el.nativeElement.style.top = `${element.jsEvent.y -110 }px`
    this.el.nativeElement.style.left = `${element.jsEvent.x -100}px`
    this.form.patchValue({title: this.event.event._def.title})
    this.form.patchValue(this.event.event._def.extendedProps)
    console.log(this.form.value)
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

  deleteEvent(id: any){
    this.eventService.deletEvent(id).subscribe(res => {
      window.location.reload()
    })
  }
}
