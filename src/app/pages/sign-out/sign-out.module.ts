import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignOutRoutingModule } from './sign-out-routing.module';
import { SignOutComponent } from './sign-out.component';
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask';




@NgModule({
  declarations: [
    SignOutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignOutRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMaskModule.forRoot()
  ]
})
export class SignOutModule { }
