import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
