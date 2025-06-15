import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css'
})
export class ProfilePage {
  user: any = null;

  constructor() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      try {
        this.user = JSON.parse(userStr);
      } catch {
        this.user = null;
      }
    }
  }
}
