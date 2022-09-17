import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public url = "http://localhost:8000"
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor( private http: HttpClient) { }

  addEvent(event:any): Observable<any>{
    return this.http.post(`${this.url}/add`, event,)
  }

  getEvents(crp: any): Observable<any> {
    return this.http.get(`${this.url}/events/get/?crp=${crp}`)
  }

}
