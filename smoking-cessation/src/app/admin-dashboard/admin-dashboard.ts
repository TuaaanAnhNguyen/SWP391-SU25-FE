import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, Routes, Router } from '@angular/router';

export const AdminDashboardRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin-dashboard').then(m => m.AdminDashboard),
    children: [
      {
        path: 'members',
        loadComponent: () => import('./members/admin-members').then(m => m.AdminMembers)
      },
    ]
  }
];

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink, CommonModule],
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
