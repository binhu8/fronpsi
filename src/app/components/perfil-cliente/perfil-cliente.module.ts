import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PerfilClienteComponent } from './perfil-cliente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuModule } from '../menu/menu.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';


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
    MatTableModule
  ],
  exports:[
    PerfilClienteComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PerfilClienteModule { }
