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
  public crpResponsavel: string | null = ''
  public teste = ''
  public form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    crpResponsavel: new FormControl('',),
    cpf: new FormControl('', Validators.required), 
    dataNascimento: new FormControl('', Validators.required), 
    telefone: new FormControl('', Validators.required), 
    contatoEmergencia: new FormGroup({
      numero: new FormControl('', Validators.required),
      nome: new FormControl('',Validators.required)
    }),
    email: new FormControl('', Validators.required), 
    endereco: new FormGroup({
      cep: new FormControl('', Validators.required),
      logradouro: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl(''),
      bairro: new FormControl('',Validators.required),
      localidade: new FormControl('',Validators.required),
      uf: new FormControl('',Validators.required)
    })
  })
  constructor(
    private clienteService: ClienteService, 
    private cepService: CepService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.crpResponsavel = this.activatedRoute.snapshot.paramMap.get('crp')
    if(this.crpResponsavel != null) this.form.patchValue({crpResponsavel: this.crpResponsavel})
  }

  addCliente(): void{
  
    this.clienteService.addCliente(this.form.value).subscribe(res => {
      this.router.navigate(['/obrigado'])
    })
  }
  

  getEndereco(): void {
    console.log(this.form.value)
    // let newCep = cep.replace('-', '')
    this.cepService.getCep(this.form.value.endereco.cep).subscribe(res => {
      console.log(res)
      this.form.patchValue({endereco: res})
      console.log(this.form.value)
    })
  }
}
