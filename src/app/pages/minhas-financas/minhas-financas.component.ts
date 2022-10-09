import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-minhas-financas',
  templateUrl: './minhas-financas.component.html',
  styleUrls: ['./minhas-financas.component.scss']
})
export class MinhasFinancasComponent implements OnInit {
  public atualMonth =  new Date().getMonth() + 1
  public month: any = new Date().getMonth() + 1
  public year: any = new Date().getFullYear()
  public atualYear: any = new Date().getFullYear()
  public dataSource: any = [];
  public total: number = 0
  public displayColumns: string[]= ['data',  'hora', 'cliente', 'valor']

  constructor(private evetService: EventService, private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.getEventMonth()
  }

  getBeforeMonth(){
    this.month -- <= 1 ? this.month = 12 : this.month 
    this.month == 12 ? this.year -- : false
    this.getEventMonth()
  }
  getAfterMonth(){
    this.month ++ >= 12 ? this.month = 1 : this.month 
    this.month == 1 ? this.year ++ : false
    this.getEventMonth()
  }

  getEventMonth(): void{
    this.total = 0
    let crp = this.userDataService.getUserCRP()
    this.evetService.getEvents(crp ).subscribe(res => {
      let response = res.filter((element: any) => element.mes == this.month && element.ano == this.year && element.realizado && element.pago);
      console.log(res)
      response.forEach((element: any) => {
        this.total += parseInt(element.valorConsulta)
      })
      this.dataSource = response
      console.log(this.dataSource)
    })
  }

}
