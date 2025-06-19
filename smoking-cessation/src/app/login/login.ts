import { UserInterface } from './../user-interface';
import { AccountService } from './../services/account-service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;
  errorMessage: string = '';

  loginObj: any = {
    userName: '',
    password: '',
  };

  private fb = inject(FormBuilder);
  private router = inject(Router);
  authService = inject(AuthService);

  constructor(private accService: AccountService) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;

      this.loginObj = {
        userName: formValue.username,
        password: formValue.password,
      };

      this.accService.onLogin(this.loginObj).subscribe({
        next: (res: any) => {
          console.log('res', res);
          if (res && res.token && res.userName) {
            localStorage.setItem('token', res.token);

            const {password, token, ...userInfo} = res;
            localStorage.setItem('currentUser', JSON.stringify(userInfo));

            this.authService.currentUserSig.set(userInfo);

            this.router.navigate(['/homepage']);

          } else {
            this.errorMessage = 'Login thất bại. Response không hoàn chỉnh.';
          }
        },
        error: (err) => {
          console.error('Login error: ', err);
          this.errorMessage = 'Login failed. Check the fields.';
        },
      });
    }
  }
}

//       next: (res: any) => {
//         this.errorMessage = '';
//         if (res && res.token) {
//           localStorage.setItem('token', res.token);
//           alert('Login successful!');
//           this.router.navigate(['/homepage']);
//         } else {
//           this.errorMessage = 'Login failed. Please check your credentials.';
//         }
//       },
//       error: (err) => {
//         this.errorMessage = 'Login failed. Please try again.';
//     }
//     });
//   } else {
//     this.errorMessage = 'Please fill in all required fields.';
//   }
// }
