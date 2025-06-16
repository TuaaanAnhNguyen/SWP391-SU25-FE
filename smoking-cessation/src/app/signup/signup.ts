import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  signupForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      fullName: [''],
      phoneNumber: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      role: ['MEMBER', Validators.required], // default role set to 'member'
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      const formValue = this.signupForm.value;

      const data = {
        userName: formValue.username,
        email: formValue.email,
        password: formValue.password,
        phoneNumber: formValue.phoneNumber,
        role: formValue.role,
      };

      this.http.post('http://localhost:8082/api/register', data).subscribe({
        next: (res: any) => {
          this.errorMessage = '';
          alert('Đăng ký thành công!');
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