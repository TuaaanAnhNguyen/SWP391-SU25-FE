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

  get isLoggedIn(): boolean {
    return !!localStorage.getItem('currentUser');
  }

  get isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    return !!user && user.role === 'admin';
  }
  
  constructor() {}

  logout(event: Event) {
    event.preventDefault();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/homepage']);
  }
}
