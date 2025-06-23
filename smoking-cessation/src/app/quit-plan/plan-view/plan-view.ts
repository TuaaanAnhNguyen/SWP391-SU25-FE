import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-plan-view',
  imports: [RouterLink, CommonModule],
  templateUrl: './plan-view.html',
  styleUrl: './plan-view.css',
})
export class PlanView implements OnInit {
  plan: any = null;
  private router = inject(Router);

  ngOnInit() {
    const planStr = localStorage.getItem('quitPlan');
    if (planStr) {
      this.plan = JSON.parse(planStr);
    } else {
      if (window.confirm('You have not created a quit plan yet. Would you like to create a new one now?')) 
        this.router.navigate(['/quit-plan']);
    }
  }
}
