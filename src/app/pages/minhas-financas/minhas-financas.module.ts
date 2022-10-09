import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinhasFinancasRoutingModule } from './minhas-financas-routing.module';
import { MinhasFinancasComponent } from './minhas-financas.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    MinhasFinancasComponent
  ],
  imports: [
    CommonModule,
    MinhasFinancasRoutingModule,
    MenuModule,
    MatTableModule,
  ]
})
export class MinhasFinancasModule { }
