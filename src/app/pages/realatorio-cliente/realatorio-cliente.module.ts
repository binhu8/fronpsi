import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealatorioClienteRoutingModule } from './realatorio-cliente-routing.module';
import { RealatorioClienteComponent } from './realatorio-cliente.component';
import { MatDividerModule } from '@angular/material/divider';
import { NgxMaskModule } from 'ngx-mask';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    RealatorioClienteComponent
  ],
  imports: [
    CommonModule,
    RealatorioClienteRoutingModule,
    MatDividerModule,
    NgxMaskModule.forRoot(),
    MatDividerModule,
    ClipboardModule,
    MatTooltipModule
  ]
})
export class RealatorioClienteModule { }
