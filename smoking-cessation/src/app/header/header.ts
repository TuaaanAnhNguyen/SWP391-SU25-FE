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

  get isLoggedIn(): boolean {
    const userStr = localStorage.getItem('currentUser');
    if (!userStr) return false;
    try {
      const user = JSON.parse(userStr);
      return !!user && typeof user === 'object' && Object.keys(user).length > 0;
    } catch {
      return false;
    }
  }

  get isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    return !!user && user.role === 'admin';
  }


  logout(event: Event) {
    event.preventDefault();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/homepage']);
  }
}
