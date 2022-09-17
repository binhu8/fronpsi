import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignOutService {

  public url: String = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  addNewUser(user: any): Observable<any> {
    return this.http.post(`${this.url}createUser`, user )
  }
}
