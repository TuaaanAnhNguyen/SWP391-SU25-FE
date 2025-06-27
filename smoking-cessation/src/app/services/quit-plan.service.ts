import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuitPlanService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8082/api/plans';

  private getAuthHeaders(): HttpHeaders {
    const currentUserStr = localStorage.getItem('currentUser');
    let token = '';
    if (currentUserStr) {
      const currentUser = JSON.parse(currentUserStr);
      token = currentUser.token;
    }
    return token
      ? new HttpHeaders({ Authorization: `Bearer ${token}` })
      : new HttpHeaders();
  }

  createPlan(planRequest: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, planRequest, {
      headers: this.getAuthHeaders(),
    });
  }

  getCurrentUserPlan(): Observable<any> {
    return this.http.get<any>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  deleteCurrentUserPlan(): Observable<void> {
    return this.http.delete<void>(this.apiUrl, {
      headers: this.getAuthHeaders(),
    });
  }

  deletePlan(planId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${planId}`, {
      headers: this.getAuthHeaders(),
    });
  }
}
