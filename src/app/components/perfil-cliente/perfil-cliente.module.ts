import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PerfilClienteComponent } from './perfil-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuModule } from '../menu/menu.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    PerfilClienteComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    MatCheckboxModule
  ],
  exports:[
    PerfilClienteComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilClienteModule { }
