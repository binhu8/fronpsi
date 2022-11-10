import { Component, ElementRef, Input, OnInit, SimpleChange, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  @ViewChild('textarea' ) el!: ElementRef<TimelineComponent>
  @Input() dataSource:any[]  = []

  
  constructor(
    private eventService: EventService
  ) { }

  ngAfterViewInit(){
    let text = document.querySelectorAll('textarea')
    console.log(text)
  }
  ngOnInit(): void {
    console.log('el -> ', this.el)
  }

  updateEvent(element: any){
    console.log(element)
    this.eventService.updateEvent(element).subscribe(res => {
        console.log(res)
    });
   
  }

  deleteEvent(id: any){
    this.eventService.deletEvent(id).subscribe(res => {
      this.dataSource = this.dataSource.filter(it => it._id != id)
    })
  }

}
