import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from 'src/app/services/cep/cep.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent implements OnInit {

  public teste = ''
  public form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    crpResponsavel: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required), 
    dataNascimento: new FormControl('', Validators.required), 
    telefone: new FormControl('', Validators.required), 
    contatoEmergencia: new FormGroup({
      numero: new FormControl('', Validators.required),
      nome: new FormControl('',Validators.required)
    }),
    email: new FormControl('', Validators.required), 
    endereco: new FormGroup({
      cep: new FormControl(''),
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      bairro: new FormControl(''),
      localidade: new FormControl(''),
      uf: new FormControl('')
    })
  })
  constructor(
    private clienteService: ClienteService, 
    private cepService: CepService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => this.form.value.crpResponsavel = params['crp'])
  }

  addCliente(): void{
    this.clienteService.addCliente(this.form.value).subscribe(res => {
      this.router.navigate(['/obrigado'])
    })
  }
  

  getEndereco(cep: String): void {
    let newCep = cep.replace('-', '')
    this.cepService.getCep(newCep).subscribe(res => {
      this.form.value.endereco = res
      console.log(this.form.value)
    })
  }
}
