import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from './header/header';
import { Sidebar } from "./sidebar/sidebar";
import { CommonModule } from '@angular/common';
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CommonModule, Sidebar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'smoking-cessation';

  private router = inject(Router);

  constructor() {}

  showHeaderFooter() {
    return !this.showSidebar();
  }

  showSidebar(){
    return this.router.url.startsWith('/admin-dashboard');
  }
}