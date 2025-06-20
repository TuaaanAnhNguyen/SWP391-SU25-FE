import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private http = inject(HttpClient);
  currentUserSig = signal<any | undefined | null>(undefined);

  constructor() {}
  async ngOnInit() {
    const currentUser = localStorage.getItem('currentUser');
    this.currentUserSig.set(currentUser);
  }

  onLogin(obj: any) {
    return this.http.post('http://localhost:8082/api/login', obj);
  }

  // async verifyToken(token: string) {
  //   return this.http.post(`${environment.apiUrl}/api/token`, token);
  // }
}
