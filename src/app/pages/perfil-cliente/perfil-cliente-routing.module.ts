import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilClienteComponent } from './perfil-cliente.component';

const routes: Routes = [{ path: '', component: PerfilClienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilClienteRoutingModule { }
