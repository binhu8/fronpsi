import { Component, OnInit } from '@angular/core';
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
    {fasIcon: faPencil, name: 'Meu perfil', routerLink: '/meu-perfil'},
    {fasIcon: faCalendar, name: 'Agenda', routerLink: '/minha-agenda'},
    {fasIcon: faUser, name: 'Meus Clientes', routerLink: '/meus-clientes'},
    {fasIcon: faDollar, name: 'Minhas finanças', routerLink: '/minhas-financas'},
    {fasIcon: faGear, name: 'Configurações', routerLink: '/configuracoes'},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['/login']);
    localStorage.clear()
  }

}
