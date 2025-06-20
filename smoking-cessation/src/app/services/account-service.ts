import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService implements OnInit {
  private http = inject(HttpClient);
  currentUserSig = signal<any | null>(null);

  constructor() {}
  async ngOnInit() {
    const token = localStorage.getItem('token');
    this.currentUserSig.set(token);
  }

  onLogin(obj: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/api/login`, obj);
  }

  // async verifyToken(token: string) {
  //   return this.http.post(`${environment.apiUrl}/api/token`, token);
  // }
}
