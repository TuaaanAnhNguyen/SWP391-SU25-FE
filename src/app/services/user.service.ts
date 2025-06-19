import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http = inject(HttpClient);

  getAccountProfile(usernameStr: string): Observable<any> {
    return this.http.get('http://localhost:8082/api/account/' + usernameStr + '/profile');
  }

  constructor() { }
}
