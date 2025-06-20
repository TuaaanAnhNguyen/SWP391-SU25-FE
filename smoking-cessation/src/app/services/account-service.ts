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
  async ngOnInit() {
    const token = localStorage.getItem('token');
    this.currentUserSig.set(token);
  }

  onLogin(obj: any): Observable<any> {
    return this.http.post('http://localhost:8082/api/login', obj);
  }

  // async verifyToken(token: string) {
  //   return this.http.post(`${environment.apiUrl}/api/token`, token);
  // }
}