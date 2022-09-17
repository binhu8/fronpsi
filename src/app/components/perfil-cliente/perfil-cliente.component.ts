import { Component, Input, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit {

  @Input() cliente: any = {};

  

  public faArrowLeft = faArrowLeft

  constructor() { }

  ngOnInit(): void {
    console.log(this.cliente)
  }

  reload(){
    location.reload()
  }

}
