import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { faCalendar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faDollar, faGear, faPencil } from '@fortawesome/free-solid-svg-icons';
import { ItemMenu } from 'src/app/models/item-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public itensMenu: ItemMenu[] = [
    
    {icon: 'event', name: 'Agenda', routerLink: '/minha-agenda'},
    {icon: 'group', name: 'Meus Clientes', routerLink: '/meus-clientes'},
    {icon: 'account_balance_wallet', name: 'Minhas finanças', routerLink: '/minhas-financas'},
    {icon: 'manage_accounts', name: 'Configurações', routerLink: '/configuracoes'},
  ]

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.clear()
  }

}
