import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    ProfileModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
