import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'http://localhost:8082/api/register';
  private http = inject(HttpClient);

  constructor() { }
}
