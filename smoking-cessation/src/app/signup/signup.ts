import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  errorMessage: string = '';

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  signupForm = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    fullName: ['', [Validators.required]],
    role: ['MEMBER', [Validators.required]],
  });

  onSubmit() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;

      const data = {
        userName: formValue.username,
        email: formValue.email,
        password: formValue.password,
        phoneNumber: formValue.phoneNumber,
        fullName: formValue.fullName,
        role: formValue.role,
      };

      this.http.post('http://localhost:8082/api/register', data).subscribe({
        next: (res: any) => {
          this.errorMessage = '';
          localStorage.setItem('token', res.token);
          alert('Đăng ký thành công! Xin hãy đăng nhập.');
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessage = 'Đăng ký thất bại!';
        },
      });
    } else {
      this.errorMessage = 'Vui lòng điền đầy đủ thông tin!';
    }
  }
}
// calculateAge() {
//   const dobValue = this.signupForm.get('dob')?.value;
//   if (dobValue) {
//     const today = new Date();
//     const dob = new Date(dobValue);
//     let age = today.getFullYear() - dob.getFullYear();
//     const m = today.getMonth() - dob.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
//       age--;
//     }
//     this.age = age >= 0 ? age : '';
//   } else {
//     this.age = '';
//   }
// }

// onSubmit() {
//     if (this.signupForm.valid) {
//       const formValue = this.signupForm.value;

//       const data = {
//         userName: formValue.username,
//         email: formValue.email,
//         password: formValue.password,
//         confirmPassword: formValue.confirmPassword,
//         phoneNumber: formValue.phoneNumber,
//         fullName: formValue.fullName,
//         role: formValue.role,
//       };

//       this.http.post('http://localhost:8082/api/register', data).subscribe({
//         next: (res: any) => {
//           this.errorMessage = '';
//           alert('Đăng ký thành công!');
//         },
//         error: (err) => {
//           this.errorMessage = 'Đăng ký thất bại!';
//         },
//       });
//     } else {
//       this.errorMessage = 'Vui lòng điền đầy đủ thông tin!';
//     }
//   }
// comment
