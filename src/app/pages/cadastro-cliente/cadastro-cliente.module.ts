import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroClienteRoutingModule } from './cadastro-cliente-routing.module';
import { CadastroClienteComponent } from './cadastro-cliente.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroClienteComponent
  ],
  imports: [
    CommonModule,
    CadastroClienteRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CadastroClienteModule { }
