import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'blog-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-create.html',
  styleUrls: ['./blog-create.css']
})
export class BlogCreate {
  blog = {
    title: '',
    content: '',
    image: '',
    author: '',
    date: '',
    category: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Lấy danh sách blog hiện tại từ localStorage (nếu có)
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    // Thêm blog mới với id tự sinh
    blogs.push({ ...this.blog, id: Date.now() });
    // Lưu lại vào localStorage
    localStorage.setItem('blogs', JSON.stringify(blogs));
    // Chuyển hướng về trang chủ hoặc danh sách blog
    this.router.navigate(['/']);
  }
}