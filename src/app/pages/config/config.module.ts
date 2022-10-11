import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfiguracoesComponent } from './components/configuracoes/configuracoes.component';
import {MatDividerModule} from '@angular/material/divider';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ConfigComponent,
    ConfiguracoesComponent
  ],
  imports: [
    CommonModule,
    ConfigRoutingModule,
    MenuModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    FontAwesomeModule
  ]
})
export class ConfigModule { }
