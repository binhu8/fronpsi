import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-meus-clientes',
  templateUrl: './meus-clientes.component.html',
  styleUrls: ['./meus-clientes.component.scss']
})
export class MeusClientesComponent implements OnInit {

  public crp: String = ''
  public clipboardCopy: any = ''
  public faCopy = faCopy
  public cliente: any  = '';
  public showPerfil: Boolean = false
  public showModal: Boolean = false
  public showCadastro: Boolean = false
  public clientes: Cliente[] = [];
  public form: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    valorConsulta: new FormControl('', Validators.required),
    crp: new FormControl('', ),
    cpfCliente: new FormControl(''),
    mes: new FormControl(''),
    ano: new FormControl(''),
    dia: new FormControl(''),
    realizado: new FormControl(''),
    pago: new FormControl(false)
  })

  public faHospitalUser = faHospitalUser
  constructor(private eventService: EventService, private clienteService: ClienteService) { }

  ngOnInit(): void {
    let userData: any = localStorage.getItem('userData')
    let userObj = JSON.parse(userData)
    this.crp = userObj.crp

    this.clienteService.getClientes(this.crp).subscribe(res => {
      this.clientes = res
    })

    this.clipboardCopy = `http://localhost:4200/cadastro-cliente/` + this.crp
  }

  agendarConsulta(cliente: any): void{
    this.showModal = true;
    this.cliente = cliente
    console.log(cliente.nome, this.cliente)
  }

  verPerfil(cliente: any){
    this.cliente = cliente;
    this.showPerfil=true
  }
  setAgenda(){
    let userData: any = localStorage.getItem('userData')
    let userObj = JSON.parse(userData)
    this.crp = userObj.crp
    this.form.value.crp = this.crp

    let ano:any  = this.form.value.date.getFullYear();
    let mes:any  = this.form.value.date.getMonth() + 1;
    let dia:any  = this.form.value.date.getDate() ;

    let dateTime = `${ano}-${mes < 10 ? `0${mes}`: mes}-${dia < 10 ? `0${dia}`: dia}T${this.form.value.time}`
    this.form.value.date = dateTime
    this.form.value.mes = mes
    this.form.value.ano = ano
    this.form.value.dia = dia
    this.form.value.realizado = false
    this.form.value.cpfCliente = this.cliente.cpf

    this.eventService.addEvent(this.form.value).subscribe(res => {
      location.reload()
    })
  }
}
