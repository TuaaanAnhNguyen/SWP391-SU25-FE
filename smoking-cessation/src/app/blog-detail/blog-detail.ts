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
      title: 'The First 24 Hours: What to Expect When You Quit',
      content: `
        <h3>What Happens in the First 24 Hours After You Quit Smoking?</h3>
        <p>When you quit smoking, your body begins to recover almost immediately. Numerous studies highlight a rapid timeline of positive changes:</p>
        <ul>
          <li><strong>Within 20 minutes:</strong> Your heart rate and blood pressure start to drop back to normal levels. Circulation to your extremities may also begin to improve.</li>
          <li><strong>Within 12 hours:</strong> The carbon monoxide level in your blood decreases significantly, returning to normal. This allows oxygen to circulate more efficiently throughout your body. Nicotine levels in your system also begin to decline.</li>
          <li><strong>Within 24 hours:</strong> Your risk of heart attack starts to decrease. Your body begins to cleanse itself of excess carbon monoxide, and blood pressure continues to normalize. Physical activity may feel easier due to increased oxygen levels.</li>
        </ul>
        <h3>Understanding and Managing Early Cravings and Withdrawal Symptoms</h3>
        <p>While the benefits begin quickly, the first 24 hours also mark the onset of nicotine withdrawal symptoms. These are temporary and indicate that your body is adjusting to the absence of nicotine.</p>
        <p><strong>Common symptoms you may experience include:</strong></p>
        <ul>
          <li><strong>Nicotine Cravings:</strong> These can be intense and may start as soon as 30 minutes after your last cigarette. They typically last about 15 minutes, so finding ways to distract yourself is crucial.</li>
          <li><strong>Headaches and Dizziness:</strong> Common as your body adapts to the changes.</li>
          <li><strong>Fatigue:</strong> Nicotine is a stimulant, so you may feel more tired than usual.</li>
          <li><strong>Increased Appetite:</strong> Since smoking can suppress hunger, you may notice your appetite returning. Having healthy snacks on hand can help.</li>
          <li><strong>Irritability, Anxiety, Difficulty Concentrating:</strong> These are psychological symptoms as your brain chemistry adjusts.</li>
        </ul>
        <h3>Tips for Managing Early Cravings</h3>
        <ul>
          <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day.</li>
          <li><strong>Healthy Snacks:</strong> Keep fruits, vegetables, or nuts readily available.</li>
          <li><strong>Distract Yourself:</strong> Engage in activities you enjoy, such as reading, walking, calling a friend, or solving puzzles.</li>
          <li><strong>Avoid Triggers:</strong> Identify situations, people, or places that tempt you to smoke. If you can't avoid them, have a coping plan ready.</li>
          <li><strong>Seek Support:</strong> Let your friends and family know you are quitting so they can support you. Support groups or counseling can also be very helpful.</li>
          <li><strong>Practice Deep Breathing:</strong> Take slow, deep breaths to stay calm when cravings arise.</li>
          <li><strong>Remember Your “Why”:</strong> Keep your reasons for quitting clear in your mind to help you overcome challenges.</li>
        </ul>
        <p>While the first hours and days can be challenging, remember that withdrawal symptoms are temporary and will gradually subside. The health benefits begin almost immediately and continue to accumulate with each smoke-free day.</p>
      `,
      image: '/image-blog-1.jpg',
      author: 'Admin',
      date: '2025-06-18',
      category: 'Health'
    },
    {
      id: 2,
      title: 'Support Systems for Quitting',
      content: 'Nội dung bài viết 2',
      image: '/Support-system.jpg',
      author: 'Coach Linh',
      date: '2024-06-01',
      category: 'Support'
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