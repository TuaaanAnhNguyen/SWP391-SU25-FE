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
      content: `
        <h3>Support Systems for Quitting</h3>
        <p>Quitting smoking is one of the best decisions you can make for your health — but it’s also one of the most challenging. The good news? You don’t have to do it alone. Having a strong support system made up of friends, family, and your wider community can make the difference between relapse and long-term success.</p>
        <ul>
          <li><strong>Encouragement:</strong> Supportive people can encourage you when you feel like giving up and remind you why you started.</li>
          <li><strong>Accountability:</strong> Friends and family can help you stay accountable to your goals and celebrate your progress.</li>
          <li><strong>Understanding:</strong> A good support network listens without judgment and helps you form new, healthy routines.</li>
          <li><strong>Community:</strong> Support groups, both in-person and online, connect you with others who understand your journey and can share strategies and encouragement.</li>
        </ul>
        <h3>How to Build Your Support System</h3>
        <ul>
          <li><strong>Talk to Friends and Family:</strong> Let them know you are quitting and ask for their support. Even a simple check-in can make a big difference.</li>
          <li><strong>Join a Support Group:</strong> Many people find strength in numbers. Look for local or online groups where you can share experiences and advice.</li>
          <li><strong>Seek Professional Help:</strong> Counselors, coaches, or healthcare providers can offer guidance and encouragement tailored to your needs.</li>
          <li><strong>Stay Connected:</strong> Regularly reach out to your support network, especially during tough moments or cravings.</li>
        </ul>
        <h3>Tips for Making the Most of Your Support</h3>
        <ul>
          <li><strong>Be Honest:</strong> Share your struggles and successes openly with your support system.</li>
          <li><strong>Ask for What You Need:</strong> Whether it’s a listening ear, a distraction, or a walk together, let others know how they can help.</li>
          <li><strong>Give Back:</strong> Supporting others on their quit journey can strengthen your own resolve and build lasting connections.</li>
        </ul>
        <p>Remember, quitting smoking isn’t just a personal decision — it’s a community journey. The more people you invite into your support system, the stronger your foundation will be. Don’t hesitate to reach out and lean on others as you work toward a healthier, smoke-free life.</p>
      `,
      image: '/Support-group.jpg',
      author: 'Coach Linh',
      date: '2024-06-01',
      category: 'Support'
    },
    {
      id: 3,
      title: 'Financial Benefits',
      content: `
        <h3>The Financial Benefits of Quitting Smoking</h3>
        <p>Quitting smoking doesn’t just improve your health—it also has a significant positive impact on your finances. Cigarettes are expensive, and the costs add up quickly over time.</p>
        <ul>
          <li><strong>Immediate Savings:</strong> The moment you stop buying cigarettes, you start saving money. Calculate how much you spend per week, month, and year on tobacco products—you’ll be surprised at the total!</li>
          <li><strong>Pack-a-day smokers:</strong> Can save hundreds of dollars each month. Annual savings can reach into the thousands.</li>
          <li><strong>Money saved:</strong> Can be used for travel, hobbies, or other healthy rewards.</li>
        </ul>
        <h3>Long-Term Financial Benefits</h3>
        <p>Beyond the cost of cigarettes, quitting reduces your risk of expensive health problems. Fewer doctor visits, less medication, and lower insurance premiums are just a few of the long-term financial perks.</p>
        <ul>
          <li><strong>Lower health and life insurance costs</strong></li>
          <li><strong>Reduced medical bills from smoking-related illnesses</strong></li>
          <li><strong>Fewer sick days and increased productivity</strong></li>
        </ul>
        <h3>Tips for Managing Your Savings</h3>
        <ul>
          <li><strong>Track your progress:</strong> Use a notebook or app to record how much you’re saving each week.</li>
          <li><strong>Reward yourself:</strong> Set aside some of your savings for something special as you reach new milestones.</li>
          <li><strong>Plan for the future:</strong> Consider investing your savings or using them for a meaningful goal.</li>
        </ul>
        <p>The financial rewards of quitting smoking are immediate and long-lasting. Use your savings as motivation and treat yourself to something special as you reach new milestones on your smoke-free journey!</p>
      `,
      image: '/Savings-money.jpg',
      author: 'Admin',
      date: '2024-05-15',
      category: 'Benefits'
    },
    {
      id: 4,
      title: 'Mindfulness Techniques',
      content: `
        <h1 class="text-4xl font-bold mb-4 text-center">
          Mindfulness Techniques for Quitting Smoking
        </h1>
       
        
        <div class="prose prose-lg max-w-none">
          <p>
            Quitting smoking is a journey that challenges both the body and the mind. While physical withdrawal can be tough, the mental and emotional aspects of quitting are often even more demanding. Mindfulness is a powerful, evidence-based approach that can help you manage cravings, reduce stress, and build resilience throughout your quit journey.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-2">What is Mindfulness?</h2>
          <p>
            Mindfulness is the practice of paying attention to the present moment with openness, curiosity, and without judgment. It helps you become more aware of your thoughts, feelings, and bodily sensations, allowing you to respond to cravings and stress in healthier ways rather than reacting automatically.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-2">Why Mindfulness Helps When Quitting Smoking</h2>
          <p>
            Many people smoke in response to stress, boredom, or difficult emotions. Mindfulness teaches you to notice these triggers as they arise, giving you the space to choose a different response. Research shows that mindfulness can reduce the intensity of cravings, lower anxiety, and improve your overall well-being during the quitting process.
          </p>

          <h2 class="text-2xl font-semibold mt-8 mb-2">Practical Mindfulness Techniques</h2>
          <ul class="list-disc pl-6">
            <li>
              <strong>Mindful Breathing:</strong> Take a few minutes to focus on your breath. Inhale slowly through your nose, feel your lungs expand, and exhale gently. If your mind wanders, gently bring your attention back to your breath.
            </li>
            <li>
              <strong>Body Scan:</strong> Sit or lie down comfortably. Bring your attention to your toes and slowly move upward, noticing sensations in each part of your body. This helps you reconnect with your body and relax tension.
            </li>
            <li>
              <strong>Urge Surfing:</strong> When a craving arises, imagine it as a wave. Notice how it builds, peaks, and eventually fades away. Remind yourself that cravings are temporary and will pass.
            </li>
            <li>
              <strong>Grounding Exercises:</strong> Use your senses to anchor yourself in the present. Notice five things you can see, four you can touch, three you can hear, two you can smell, and one you can taste.
            </li>
            <li>
              <strong>Mindful Walking:</strong> Take a slow walk, paying attention to each step, the movement of your body, and the sensations beneath your feet. This can be a healthy alternative to a smoke break.
            </li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-2">Tips for Building a Mindfulness Habit</h2>
          <ul class="list-disc pl-6">
            <li><strong>Start Small:</strong> Even a few minutes a day can make a difference. Gradually increase your practice as you feel comfortable.</li>
            <li><strong>Be Patient:</strong> Mindfulness is a skill that develops over time. Don’t worry if your mind wanders—gently return your focus to the present.</li>
            <li><strong>Use Reminders:</strong> Set an alarm or place notes in visible spots to remind yourself to pause and be mindful.</li>
            <li><strong>Practice During Cravings:</strong> When you feel the urge to smoke, pause and try a mindfulness technique before making any decision.</li>
            <li><strong>Join a Group:</strong> Consider joining a mindfulness or meditation group for support and accountability.</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-2">The Benefits of Mindfulness for Quitting Smoking</h2>
          <ul class="list-disc pl-6">
            <li>Reduces stress and anxiety, making it easier to cope with withdrawal</li>
            <li>Improves emotional regulation and resilience</li>
            <li>Helps break automatic habits and routines associated with smoking</li>
            <li>Increases self-awareness and self-control</li>
            <li>Enhances overall well-being and quality of life</li>
          </ul>

          <h2 class="text-2xl font-semibold mt-8 mb-2">Final Thoughts</h2>
          <p>
            Mindfulness is not a quick fix, but a lifelong skill that can support you far beyond your quit journey. By learning to be present and compassionate with yourself, you’ll be better equipped to handle cravings, stress, and setbacks. Remember, every smoke-free moment is a victory—take it one breath at a time.
          </p>
        </div>
      `,
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
      // Lấy bài viết mặc định
      this.postData = this.posts.find(post => post.id === this.postId);
      // Nếu không có, tìm trong localStorage
      if (!this.postData) {
        const userBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
        this.postData = userBlogs.find((post: any) => post.id === this.postId);
      }
    });
  }
}