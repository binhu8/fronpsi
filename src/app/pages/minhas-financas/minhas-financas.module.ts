import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinhasFinancasRoutingModule } from './minhas-financas-routing.module';
import { MinhasFinancasComponent } from './minhas-financas.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    MinhasFinancasComponent
  ],
  imports: [
    CommonModule,
    MinhasFinancasRoutingModule,
    MenuModule,
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MinhasFinancasModule { }
