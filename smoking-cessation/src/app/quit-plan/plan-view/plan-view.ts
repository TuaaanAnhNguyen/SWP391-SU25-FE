import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuitPlanService } from '../../services/quit-plan.service';

@Component({
  selector: 'app-plan-view',
  imports: [RouterLink, CommonModule],
  templateUrl: './plan-view.html',
  styleUrl: './plan-view.css',
})
export class PlanView implements OnInit {
  plan: any = null;
  private router = inject(Router);
  private quitPlanService = inject(QuitPlanService);

  ngOnInit() {
    this.quitPlanService.getCurrentUserPlan().subscribe({
      next: (plan) => {
        this.plan = plan;
      },
      error: () => {
        // Check log in
        const currentUser = localStorage.getItem('currentUser');
        if (!currentUser) {
          // Guest
          const savedPlan = localStorage.getItem('quitPlan');
          if (savedPlan) {
            this.plan = JSON.parse(savedPlan);
            return;
          }
        }
        if (
          window.confirm(
            'You have not created a quit plan yet. Would you like to create a new one now?'
          )
        ) {
          this.router.navigate(['/quit-plan']);
        }
      },
    });
  }
}
