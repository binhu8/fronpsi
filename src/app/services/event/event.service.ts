import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataService } from '../user-data/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public url = "http://localhost:8000"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor( private userDataService: UserDataService, private http: HttpClient) { }

  addEvent(event:any): Observable<any>{
    return this.http.post(`${this.url}/add`, event,)
  }

  getEvents(crp: any): Observable<any> {
    return this.http.get(`${this.url}/events/get/?crp=${crp}`)
  }
  getEventsClient(cpf: any): Observable<any> {
    console.log('get cliente eventos', cpf)
    let crp = this.userDataService.getUserCRP()
    return this.http.get(`${this.url}/events/get-evento-cliente/?cpf=${cpf}&&crp=${crp}`)
  }

  updateEvent(event: any):Observable<any>{
    return this.http.put(`${this.url}/events/update-event`,event)
  }

}
