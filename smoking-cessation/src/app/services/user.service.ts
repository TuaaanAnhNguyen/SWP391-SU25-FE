import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  getAccountProfile(usernameStr: string) {
    const currentUserStr = localStorage.getItem('currentUser');
    let token = '';
    if(currentUserStr) {
      const currentUser = JSON.parse(currentUserStr);
      token = currentUser.token;
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get('http://localhost:8082/api/account/' + usernameStr + '/profile', { headers });
  }

  constructor() { }
}
