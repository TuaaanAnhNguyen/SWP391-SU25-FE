import { Component, HostListener, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  userDropdownOpen = false;
  private router = inject(Router);

  toggleUserDropdown(event: Event) {
    event.stopPropagation();
    this.userDropdownOpen = !this.userDropdownOpen;
  }

  closeUserDropdown() {
    this.userDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.userDropdownOpen = false;
  }

  logout(event: Event) {
    event.preventDefault();
    localStorage.removeItem('currentUser');
    this.router.navigate(['/homepage']);
  }
}
