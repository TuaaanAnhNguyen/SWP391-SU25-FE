import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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

  showHeader() {
    return !['/login', '/signup'].includes(this.router.url);
  }
}
