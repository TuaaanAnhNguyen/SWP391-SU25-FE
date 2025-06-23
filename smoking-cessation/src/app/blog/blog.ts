import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css']
})
export class Blog {
  posts = [
    { id: 1, title: 'The First 24 Hours', excerpt: 'Discover what happens when you quit smoking.' },
    { id: 2, title: 'Building Your Support System', excerpt: 'Leverage your community for support.' },
    { id: 3, title: 'Financial Benefits of Quitting', excerpt: 'Save money by quitting smoking.' },
    { id: 4, title: 'Mindfulness Techniques', excerpt: 'Handle cravings with mindfulness exercises.' }
  ];
}
export class BlogComponent {

}
