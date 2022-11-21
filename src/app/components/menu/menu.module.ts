import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ProfileModule } from '../profile/profile.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ProfileModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
