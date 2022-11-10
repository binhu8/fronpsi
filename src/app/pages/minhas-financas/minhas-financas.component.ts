import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';
import { elementClosest } from '@fullcalendar/angular';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

@Component({
  selector: 'app-minhas-financas',
  templateUrl: './minhas-financas.component.html',
  styleUrls: ['./minhas-financas.component.scss']
})
export class MinhasFinancasComponent implements OnInit {

  public atualMonthPercent: number   = 0 
  public invoicingAtualMonthPercent: number  = 0
  public ivoicingBeforeMonth: number  = 0
  public atualMonth =  new Date().getMonth() + 1
  public month: any = new Date().getMonth() + 1
  public year: any = new Date().getFullYear()
  public atualYear: any = new Date().getFullYear()
  public dataSource: any = [];
  public total: number = 0
  public displayColumns: string[]= ['data', 'valor']
  public months: any = {
    1: 'Janeiro',
    2: 'Fevereiro',
    3: 'Março',
    4: 'Abril',
    5: 'Maio',
    6: 'Junho',
    7: 'Julho',
    8: 'Agosto',
    9: 'Setembro',
    10: 'Outubro',
    11: 'Novembro',
    12: 'Dezembro'
   }


  constructor(private eventService: EventService, private userDataService: UserDataService) { }
  @ViewChild('myChart', {static:true}) chart!: ElementRef 
  @ViewChild('chartYear', {static:true}) chartYear!: ElementRef 

  labelYear: any[] = []
  labels: any[] = []
  data = {
    labels: this.labels,
    datasets: [{
      data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  config: any ={
    type: "bar",
    data: this.data, 
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
  ngAfterViewInit(){
    
    
  }

  values: any[] = []
  ngOnInit(): void {
    this.getEventMonth()
    this.getEventYear()
   
  }

  getTotalCost() {
    return this.dataSource.map((t:any) => t.valorConsulta).reduce((acc:any, value:any) => acc + value, 0);
  }

  getBeforeMonth(){
    this.month -- <= 1 ? this.month = 12 : this.month 
    this.month == 12 ? this.year -- : false
    let chartStatus = Chart.getChart(this.chart.nativeElement)
    if(chartStatus != undefined){
      chartStatus.destroy()
    }
    this.getEventMonth()
    
  }
  getAfterMonth(){
    this.month ++ >= 12 ? this.month = 1 : this.month 
    this.month == 1 ? this.year ++ : false
    let chartStatus = Chart.getChart(this.chart.nativeElement)
    if(chartStatus != undefined){
      chartStatus.destroy()
    }
    this.getEventMonth()
  }

  getEventMonth(): void{
    this.total = 0
    this.labels = []
    this.values = []
    let crp = this.userDataService.getUserCRP()
    this.eventService.getEvents(crp ).subscribe(res => {
      let response = res.filter((element: any) => element.mes == this.month && element.ano == this.year && element.realizado && element.pago);
      
      
      response.forEach((element: any) => {
        this.total += parseInt(element.valorConsulta)
      })
      this.dataSource = response
      this.dataSource.forEach((data: any, index: number) => {
        data.valorConsulta = Number(data.valorConsulta)
        this.verifyContainsDate(data)
        
      })

      console.log(this.dataSource, 'data -> ')

      this.getInvoicingBeforeMonth(res)

      new Chart(this.chart.nativeElement, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [{
            label: 'R$',
            data: this.values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
        }
      })
    })
  }

  getEventYear(){
    let crp = this.userDataService.getUserCRP()
    this.eventService.getEvents(crp).subscribe(res => {
      res.forEach((element: any) => {
        element.ano = Number(element.ano)
        console.log(element.mes)
      })
    })

  }

  getInvoicingBeforeMonth(data: any){
    this.ivoicingBeforeMonth = 0
    this.invoicingAtualMonthPercent = 0
    data.forEach((element: any) => {
      element.mes = Number(element.mes)
      element.valorConsulta = Number(element.valorConsulta)
      if(element.mes == this.month -1) this.ivoicingBeforeMonth += element.valorConsulta
      if(element.mes == this.month) this.invoicingAtualMonthPercent += element.valorConsulta
      if(this.ivoicingBeforeMonth <= 0){
        this.atualMonthPercent = 100
      }else{
        
        this.atualMonthPercent = (this.invoicingAtualMonthPercent - this.ivoicingBeforeMonth) / this.ivoicingBeforeMonth * 100 
        this.atualMonthPercent = Math.floor(this.atualMonthPercent)
      }
    })
  }

  verifyContainsDate(element: any){
    if(this.labels.includes(element.data)){
      let index = this.labels.indexOf(element.data)
      this.values[index] = this.values[index] + element.valorConsulta
    }else{
      this.labels.push(element.data)
      this.values.push(element.valorConsulta)
    }
  }

}
