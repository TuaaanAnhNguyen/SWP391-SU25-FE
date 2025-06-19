import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'http://localhost:8082';
  private http = inject(HttpClient);

  constructor() { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`);
  }

  postData(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, { key: 'value' });
  }

  putData(): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/data/1`, { key: 'newValue' });
  }

  deleteData(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/data/1`);
  }
}
