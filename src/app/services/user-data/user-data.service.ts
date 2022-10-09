import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public url: string = 'http://localhost:8000/'

  constructor(private http: HttpClient) { }

  getUserCRP(): String {
    let userData: any = localStorage.getItem('userData')
    let userObj = JSON.parse(userData)
    let crp = userObj.crp
    return crp
  }

  getUserData(): String {
    let userData: any = localStorage.getItem('userData')
    let userObj = JSON.parse(userData)
    let response = userObj
    return response
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.url}user/update-user`, user)
  }
}
