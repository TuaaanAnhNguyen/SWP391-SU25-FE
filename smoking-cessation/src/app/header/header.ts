import { AuthService } from './../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { Component, inject, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  private router = inject(Router);
  isSticky = false;
  constructor(public authService: AuthService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 20;
  }

  // get isLoggedIn(): boolean {
  //   const userStr = localStorage.getItem('currentUser');
  //   if (!userStr) return false;
  //   try {
  //     const user = JSON.parse(userStr);
  //     return !!user && typeof user === 'object' && Object.keys(user).length > 0;
  //   } catch {
  //     return false;
  //   }
  // }

  // get isAdmin(): boolean {
  //   const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
  //   return !!user && user.role === 'admin';
  // }


  logout(event: Event) {
    event.preventDefault();
    localStorage.removeItem('currentUser');
    this.authService.currentUserSig.set(null);
    this.router.navigate(['/homepage']).then(() => window.location.reload());
  }
}
