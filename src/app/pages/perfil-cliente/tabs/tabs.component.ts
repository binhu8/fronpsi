import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as moment from 'moment';
import { LoadingService } from 'src/app/core/services/loading.service';
import { CepService } from 'src/app/services/cep/cep.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { EventService } from 'src/app/services/event/event.service';
import { UserDataService } from 'src/app/services/user-data/user-data.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @Input() userData: any = {}
  @Input() eventsClient: any[] = []

  
  @Input() cliente: any = {};
  @ViewChild('printpdf' ) el!: ElementRef

  dataEvents: any[] = []
  displayedColumns: any[] = [ 'data', 'time', 'valorConsulta','realizado', 'pago', 'deletar'];
  dataSource: any[] = []
  mesNascimento: any = ''
  anoNascimento: any = ''
  idade: number | null = null
  
  initialName: string = ''
  faArrowRight = faArrowRight;
  clientAge: number = 0
  faArrowLeft = faArrowLeft;
  showPdf: boolean = false;
  month: number = new Date().getMonth() + 1
  atualMonth: number = new Date().getMonth() + 1
  year: number = new Date().getFullYear();
  atualYear: number = new Date().getFullYear();
  day: Number = new Date().getDate()
  columns: any = {
    data: 'Data',
    time: 'Hora',
    valorConsulta: 'Valor da consulta',
    realizado: 'Sessão Realizada',
    pago: 'Pagamento',
    observacao: 'Observação',
   }

   urlCliente: string = ''

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

  constructor(
    private eventService: EventService, 
    private userDataService: UserDataService,
    private clienteService: ClienteService,
    private cepService: CepService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService
    ) { }

  ngOnInit(): void {
    this.urlCliente = `https://psimanager.netlify.app/relatorio/${this.cliente._id}/${this.cliente.crpResponsavel}/${this.month}/${this.year}`
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log('toma id', id)
    this.userData = this.userDataService.getUserData()
    if(id !== null) {
      this.getClientData(id)
      
    }

  }

  getClientData(id: string){
    this.loadingService.show()
    this.clienteService.getClientById(id).subscribe((res: any) => {
      this.initialName = res.nome[0]
      this.anoNascimento = Number(moment(res.dataNascimento, 'DDMMYYYY').format('YYYY'))
      this.mesNascimento = Number(moment(res.dataNascimento, 'DDMMYYYY').format('MM'))
      res.dataNascimento = moment(res.dataNascimento, 'DDMMYYYY').format('DD/MM/YYYY')
      this.setIdade()
      this.userData = res
      console.log(this.userData, 'usuario')
      this.getEvents()
      this.loadingService.hide()
    })
  }

  setIdade(){
    this.idade = this.atualYear - this.anoNascimento
    this.atualMonth < this.mesNascimento ? this.idade -- : this.idade
  }

  getBeforeMonth(): void{
    this.month -- 
    if(this.month < 1) {
      this.month = 12;
      this.year --
    }
    this.urlCliente = `https://psimanager.netlify.app/relatorio/${this.cliente._id}/${this.cliente.crpResponsavel}/${this.month}/${this.year}`
    this.getEvents()
  }
  setAfterMonth(): void{
    this.month ++ 
    if(this.month > 12) {
      this.month = 1;
      this.year ++
    }
    this.urlCliente = `https://psimanager.netlify.app/relatorio/${this.cliente._id}/${this.cliente.crpResponsavel}/${this.month}/${this.year}`
    this.getEvents()
  }

  getEvents(){
    this.loadingService.show();
    this.eventService.getEventsClient(this.userData.cpf).subscribe(res => {
      console.log(this.userData.cpf)
      this.eventsClient = res.filter((it: any) => it.mes == this.month && it.ano == this.year)
      this.dataEvents = res
      this.loadingService.hide();
    })
  }

  reload(){
    location.reload()
  }

  


 

   printPDF(){    
     console.log(this.el, 'element')
      let doc: any =   document.querySelector('.folha')
      html2canvas(this.el.nativeElement).then(canvas => {
        let pdf = new jsPDF('p')
       
        let imgData = canvas.toDataURL('image/png')

        const imgProps= pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0,0, pdfWidth, pdfHeight)
        pdf.save(`${this.cliente.nome}_${this.month}_${this.year}.pdf`);
        this.showPdf = false
      })
    
  }

  teste(element: any){
    
  }

  clienteAgeCalc(){

    let anoNascimento =this.cliente.dataNascimento.substring(4)
    let mesNascimento =this.cliente.dataNascimento.substring(2,4)
    this.clientAge = this.atualYear - anoNascimento
    if(mesNascimento > this.atualMonth) this.clientAge --
  }

  updateClientInfo(){
    this.clienteService.updateCliente(this.cliente).subscribe(res => {
      
    })
  }

  replyWhatsapp(){
    window.open(`https://wa.me/55${this.cliente.telefone}?text=Olá ${this.cliente.nome}, estou te enviando,
    seu relatório das consultas realizadas em ${this.months[this.month]} de ${this.year}.
    Para qualquer dúvida estou a disposição. 
    ${this.urlCliente}`, '_blank')
  }

}
