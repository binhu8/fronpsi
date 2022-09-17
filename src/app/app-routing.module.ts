import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioConectadoGuard } from './services/guards/usuario-conectado.guard';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';

const routes: Routes = [
    { 
      path: 'minha-agenda',
      canActivate: [UsuarioConectadoGuard], 
      loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) 
    },
    { 
      path: '', 
      canActivate: [UsuarioConectadoGuard],
      loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule) 
    },
    { 
      path: 'login',
      canActivate: [UsuarioNaoAutenticadoGuard], 
      loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
    },
    { 
      path: 'sign-out', 
      canActivate: [UsuarioNaoAutenticadoGuard], 
      loadChildren: () => import('./pages/sign-out/sign-out.module').then(m => m.SignOutModule) 
    },
    { 
      path: 'meus-clientes',
      canActivate: [UsuarioConectadoGuard], 
      loadChildren: () => import('./pages/meus-clientes/meus-clientes.module').then(m => m.MeusClientesModule) 
    },
    { 
      path: 'cadastro-cliente/:crp', 
      loadChildren: () => import('./pages/cadastro-cliente/cadastro-cliente.module').then(m => m.CadastroClienteModule) 
    },
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }