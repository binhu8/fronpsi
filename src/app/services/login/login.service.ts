import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url: any = "https://psimanager.herokuapp.com"

  constructor(private http: HttpClient) { }

  checkUserLogin(user: any): Observable<any> {
    return this.http.post(`${this.url}/login`, user)
  }

  get logado(): boolean{
    return localStorage.getItem('userData') ? true : false
  }
}
