import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { CepService } from 'src/app/services/cep/cep.service';
import { SignOutService } from 'src/app/services/sign-out/sign-out.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit {
  public error: any = {}
  public form: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    cpf: new FormControl('', Validators.required),
    crp: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
    valorConsultaPadrao: new FormControl('', Validators.required),
    endereco: new FormGroup({
      numero: new FormControl(''),
      cep:  new FormControl(''),
      logradouro:  new FormControl(''),
      complemento:  new FormControl(''),
      bairro:  new FormControl(''),
      localidade:  new FormControl(''),
      uf:  new FormControl(''),
     
    })

    
  })

  constructor(private router: Router, private cepService: CepService, private signOutService: SignOutService) { }

  ngOnInit(): void {
  }

  public getEndereco(cep: any): void {
    let newCep = cep.replace('-', '').replace('.', '');

    this.cepService.getCep(newCep).subscribe((res: Endereco) => {

      res.numero = this.form.value.endereco.numero;
      res.complemento = this.form.value.endereco.complemento;
      this.form.patchValue({endereco: res})

    });
  }

  public addNewUser(): void {
        this.signOutService.addNewUser(this.form.value).subscribe(res => {
            res.error ? this.error = res : this.router.navigate(['login'])
            
        })
  }
}
