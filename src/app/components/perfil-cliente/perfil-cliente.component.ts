import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { EventService } from 'src/app/services/event/event.service';
import  {jsPDF} from 'jspdf'
import html2canvas from 'html2canvas';
import { UserDataService } from 'src/app/services/user-data/user-data.service';
import { CepService } from 'src/app/services/cep/cep.service';




@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit {

  @Input() cliente: any = {};
  @ViewChild('pdf', {static: false}) el!: ElementRef

  displayedColumns: any[] = [ 'data', 'hora', 'valor','realizado', 'pagamento', 'observacao'];
  dataSource: any[] = []

  public faArrowRight = faArrowRight
  public faArrowLeft = faArrowLeft
  public userData: any = {}
  public showPdf: boolean = false;
  public month: number = new Date().getMonth() + 1
  public year: number = new Date().getFullYear()

  constructor(
    private eventService: EventService, 
    private userDataService: UserDataService,
    private cepService: CepService
    ) { }

  ngOnInit(): void {
    this.userData = this.userDataService.getUserData()
    this.getEvents()
    console.log(this.cliente)
  }

  getBeforeMonth(): void{
    this.month -- 
    if(this.month < 1) {
      this.month = 12;
      this.year --
    }
    this.getEvents()
  }
  setAfterMonth(): void{
    this.month ++ 
    if(this.month > 12) {
      this.month = 1;
      this.year ++
    }
    this.getEvents()
  }

  getEvents(){
    this.eventService.getEventsClient(this.cliente.cpf).subscribe(res => {
      this.dataSource = res.filter((it: any) => it.mes == this.month && it.ano == this.year)
      console.log(res)
    })
  }

  reload(){
    location.reload()
  }

  updateEvent(element: any){
    this.eventService.updateEvent(element).subscribe(res => {
      console.log('resposne', res)
    });
    console.log(element)
  }

  

   printPDF(){
     this.showPdf = true
    
     setTimeout(() => {
      let doc: any =   document.querySelector('.container-pdf')
      html2canvas(doc).then(canvas => {
        let pdf = new jsPDF('p', 'cm', 'a4')
  
        let imgData = canvas.toDataURL('image/jpeg', 1.0)
        pdf.addImage(imgData, 'JPEG', 0,0, 21.0, 29.7)
        pdf.save(`${this.cliente.nome}_${this.month}_${this.year}.pdf`);
        this.showPdf = false
      })
     }, 100);
    
  }

  teste(element: any){
    console.log(element)
  }
}
