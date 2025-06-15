import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  stats = [
    { title: 'Total Members', value: 'N/A' },
    { title: 'Total Coaches', value: 'N/A' },
    { title: 'Total Staffs', value: 'N/A' },
    { title: 'Active Quit Plans', value: 'N/A' },
    { title: 'Completed Quit Plans', value: 'N/A' },
    { title: 'Total Community Posts', value: 'N/A' },
    { title: 'New Registrations (This Month)', value: 'N/A' },
  ];

  userDropdownOpen = false;

  private router = inject(Router);

  get isDashboardRoot(): boolean {
    return /^\/admin-dashboard\/?$/.test(this.router.url); //get exact url of admin-dashboard, no children
  }

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
}
