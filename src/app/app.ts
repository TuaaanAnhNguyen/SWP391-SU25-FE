import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from "./sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, CommonModule, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected title = 'smoking-cessation';

  private router = inject(Router);

  constructor() {}

  showHeaderFooter() {
    return ![
      '/login',
      '/signup',
    ].includes(this.router.url) && !this.showSidebar();
  }

  showSidebar() {
    return this.router.url.startsWith('/admin-dashboard');
  }
}
