import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HourService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5050/configuration');
    //return this.http.get<any>('data/db.json');
  }

  getDataById(id: number): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5050/configuration')
    //return this.http.get<any>('data/db.json')
  }  

  saveData(data : string): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:5050/saveconfiguration', data)    
  }
}
