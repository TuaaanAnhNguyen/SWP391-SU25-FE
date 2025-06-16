import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string = '';
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);
  
  constructor() {

    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;

      const data = {
        userName: formValue.username,
        password: formValue.password
      };
      
      this.http.post('http://localhost:8082/api/login', data).subscribe({
        next: (res: any) => {
          this.errorMessage = '';
          if (res && res.token) {
            localStorage.setItem('token', res.token);
            alert('Login successful!');
            this.router.navigate(['/homepage']);
          } else {
            this.errorMessage = 'Login failed. Please check your credentials.';
          }
        },
        error: (err) => {
          this.errorMessage = 'Login failed. Please try again.';
      }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
