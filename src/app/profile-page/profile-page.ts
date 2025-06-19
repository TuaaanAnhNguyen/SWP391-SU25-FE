import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { AccountService } from '../services/account-service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.css',
})
export class ProfilePage implements OnInit {
  user: any = null;

  userService = inject(UserService);
  authService = inject(AuthService);

  constructor() {}

  ngOnInit(): void {
    const currentUser = this.authService.currentUserSig();

    if (currentUser && (currentUser.username || currentUser.userName)) {
      const usernameToFetch = currentUser.username || currentUser.userName;
      this.userService.getAccountProfile(usernameToFetch).subscribe(
        (profileData: any) => {
          this.user = {
            username: profileData.userName,
            email: profileData.email,
            fullName: profileData.fullName,
            role: profileData.role,
            phone: profileData.phone,
            address: profileData.address
          }
          console.log('Profile loaded: ', this.user);
        },
        (error) => {
          console.error('Error fetching profile: ', error);
          this.user = null;
        }
      );
    } else {
      console.warn('No logged-in user found.');
      this.user = null;
    }
  }
}
