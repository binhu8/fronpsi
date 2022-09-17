import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-meus-clientes',
  templateUrl: './meus-clientes.component.html',
  styleUrls: ['./meus-clientes.component.scss']
})
export class MeusClientesComponent implements OnInit {

  public faCopy = faCopy
  public cliente: any  = '';
  public showPerfil: Boolean = false
  public showModal: Boolean = false
  public showCadastro: Boolean = false
  public clientes = [
    {
      nome: 'Fábio Francisco da Silva',
     
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      dataPagamento:'',
      valorCombinado: '70'
    }, 
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Gabriela Alves Batista da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    },
    {
      nome: 'Fábio Francisco da Silva',
      endereco: {
        cep: '07273020',
        logradouro: 'Rua serra talhada',
        numero: '106',
        complemento: 'Casa 198',
        bairro: 'Jardim Guilhermino',
        cidade: 'Guarulhos',
        uf: 'sp'
      },
      telefone: '11978527227',
      contatoEmergencia: '11986501092',
      dataNascimento: '03/12/1995',
      cpf: '43379495859',
      email: 'binhudo8@gmail.com',
      dataPagamento:'',
      valorCombinado: '70'
    }
  ];
  public form: FormGroup = new FormGroup({
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    crp: new FormControl('', Validators.required),
    cpfCliente: new FormControl('', Validators.required)
  })

  public faHospitalUser = faHospitalUser
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
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
    this.form.value.crp = userObj.crp

    let ano:any  = this.form.value.date.getFullYear();
    let mes:any  = this.form.value.date.getMonth() + 1;
    let dia:any  = this.form.value.date.getDate() ;

    let dateTime = `${ano}-${mes < 10 ? `0${mes}`: mes}-${dia < 10 ? `0${dia}`: dia}T${this.form.value.time}`
    this.form.value.date = dateTime
    this.form.value.cpfCliente = this.cliente.cpf

    this.eventService.addEvent(this.form.value).subscribe(res => {
      location.reload()
    })
  }
}
