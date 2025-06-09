import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'smoking-cessation';

  private router = inject(Router);

  constructor() {}

  showHeader() {
    return !['/login', '/signup'].includes(this.router.url);
  }
}
