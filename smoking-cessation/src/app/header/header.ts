import { AuthService } from './../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private router = inject(Router);

  constructor(public authService: AuthService) {}

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

  logout(event: Event) {
    event.preventDefault();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/homepage']);
  }
}
