import { AuthService } from './../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private router = inject(Router);
  private http = inject(HttpClient);

  isSessionValid: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.checkSession();
  }

  get currentUser() {
    const userStr = localStorage.getItem('currentUser');
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  get isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  get userRole(): string | null {
    return this.currentUser?.role || null;
  }

  checkSession() {
    const token = localStorage.getItem('token');
    if(!token) {
      this.isSessionValid = false;
      return;
    }
  }

  logout(event: Event) {
    event.preventDefault();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/homepage']);
  }
}
