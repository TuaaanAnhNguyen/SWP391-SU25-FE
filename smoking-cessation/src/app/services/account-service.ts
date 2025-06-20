import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../user-interface';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  currentUserSig = signal<any | undefined | null>(undefined);

  constructor() {}

  onLogin(obj: any): Observable<any> {
    return this.http.post('http://localhost:8082/api/login', obj);
  }

  
}
