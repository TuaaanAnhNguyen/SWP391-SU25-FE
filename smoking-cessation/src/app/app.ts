import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from "./sidebar/sidebar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CommonModule, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'smoking-cessation';

  private router = inject(Router);

  constructor() {}

  showHeader() {
    return ![
      '/login',
      '/signup',
      '/admin-dashboard',
      '/admin-dashboard/members',
      '/admin-dashboard/coaches',
      '/admin-dashboard/staffs',
      '/admin-dashboard/admins',
    ].includes(this.router.url);
  }

  showSidebar(){
    return ![
      '/login',
      '/signup',
      '/homepage',
      '/profile-page',
      '/blog',
    ].includes(this.router.url);
  }
}
