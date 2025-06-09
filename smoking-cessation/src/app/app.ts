import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from "./header/header";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'smoking-cessation';

  private router = inject(Router);

  constructor() {}

  showHeader() {
    return !['/login', '/signup', '/admin-dashboard'].includes(this.router.url);
  }
}
