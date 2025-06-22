import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'blog-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrls: ['./blog-detail.css']
})
export class BlogDetail implements OnInit {
  postId!: number;
  postData: any;

  posts = [
    {
      id: 1,
      title: 'The First 24 Hours',
      content: 'Nội dung bài viết 1',
      image: '/Healthy.jpg',
      author: 'Admin',
      date: '2025-06-18',
      category: 'Health'
    },
    {
      id: 2,
      title: 'Support System',
      content: 'Nội dung bài viết 2',
      image: '/Support-group.jpg',
      author: 'Coach Sarah',
      date: '2024-05-20',
      category: 'Community'
    },
    {
      id: 3,
      title: 'Financial Benefits',
      content: 'Nội dung bài viết 3',
      image: '/Savings-money.jpg',
      author: 'Admin',
      date: '2024-05-15',
      category: 'Benefits'
    },
    {
      id: 4,
      title: 'Mindfulness Techniques',
      content: 'Nội dung bài viết 4',
      image: '/Mindfulness.jpg',
      author: 'Coach Alex',
      date: '2024-05-10',
      category: 'Health'
    }
  ];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.postId = Number(params.get('id'));
      this.postData = this.posts.find(post => post.id === this.postId);
    });
  }
}