import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusClientesRoutingModule } from './meus-clientes-routing.module';
import { MeusClientesComponent } from './meus-clientes.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AddEventModule } from '../add-event/add-event.module';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { ProfileModule } from 'src/app/components/profile/profile.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfilClienteModule } from 'src/app/components/perfil-cliente/perfil-cliente.module';


@NgModule({
  declarations: [
    MeusClientesComponent
  ],
  imports: [
    CommonModule,
    MeusClientesRoutingModule,
    FullCalendarModule, 
    AddEventModule,
    MenuModule,
    ProfileModule,
    FontAwesomeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PerfilClienteModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MeusClientesModule { }