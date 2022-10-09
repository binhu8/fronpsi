import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from 'src/app/models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public url: String = 'https://psimanager.herokuapp.com'
  constructor(private http: HttpClient) { }

  addCliente(cliente: Cliente): Observable<any> {
      return this.http.post(`${this.url}/add-cliente`, cliente)
  }

  getClientes(crp:String): Observable<any> {
    return this.http.get(`${this.url}/clientes/?crp=${crp}`)
  }
}
