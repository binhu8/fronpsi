import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  public url: string = 'https://psimanager.herokuapp.com/'

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
    return this.http.put(`${environment.api}/user/update-user`, user)
  }
}
