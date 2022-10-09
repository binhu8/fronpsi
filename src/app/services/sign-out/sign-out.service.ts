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
    return this.http.post(`${this.url}user`, user )
  }

  updateUser(user: any): Observable<any> {
    let userData = JSON.stringify(user)
    localStorage.setItem('userData', userData)
    console.log(userData)
    return this.http.put(`${this.url}user/update-user`, user)
  }
}
