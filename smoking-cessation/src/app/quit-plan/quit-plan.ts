import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { QuitPlanService } from '../services/quit-plan.service';

@Component({
  selector: 'app-quit-plan',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quit-plan.html',
  styleUrl: './quit-plan.css',
})
export class QuitPlan implements OnInit {
  quitPlanForm: FormGroup;
  quitDateWarning: string = '';
  todayString: string;
  isGuest: boolean = false;

  private router = inject(Router);
  private quitPlanService = inject(QuitPlanService);

  reasonsList = [
    { id: 'reason-health', value: 'Improved Health', label: 'Improved Health' },
    {
      id: 'reason-family',
      value: 'For Family/Loved Ones',
      label: 'For Family/Loved Ones',
    },
    { id: 'reason-money', value: 'Save Money', label: 'Save Money' },
    {
      id: 'reason-appearance',
      value: 'Better Appearance',
      label: 'Better Appearance',
    },
    {
      id: 'reason-energy',
      value: 'Increased Energy',
      label: 'Increased Energy',
    },
    {
      id: 'reason-freedom',
      value: 'Freedom/Control',
      label: 'Freedom & Control',
    },
  ];

  triggersList = [
    { id: 'trigger-stress', value: 'Stress', label: 'Stress' },
    { id: 'trigger-meals', value: 'After Meals', label: 'After Meals' },
    {
      id: 'trigger-coffee-alcohol',
      value: 'With Coffee/Alcohol',
      label: 'With Coffee/Alcohol',
    },
    { id: 'trigger-boredom', value: 'Boredom', label: 'Boredom' },
    {
      id: 'trigger-social',
      value: 'Social Situations (seeing others smoke)',
      label: 'Social Situations (seeing others smoke)',
    },
    { id: 'trigger-driving', value: 'Driving', label: 'Driving' },
    {
      id: 'trigger-morning',
      value: 'First Thing in the Morning',
      label: 'First Thing in the Morning',
    },
  ];

  strategiesList = [
    { id: 'strategy-avoid', value: 'Avoid Triggers', label: 'Avoid Triggers' },
    {
      id: 'strategy-support',
      value: 'Join a Support Group/Community',
      label: 'Join a Support Group/Community',
    },
    {
      id: 'strategy-distraction',
      value: 'Distract Myself',
      label: 'Distract myself (hobby, walk)',
    },
    {
      id: 'strategy-hydration',
      value: 'Hydration',
      label: 'Drink water/healthy drinks',
    },
    {
      id: 'strategy-meditation',
      value: 'Mindfulness/Meditation',
      label: 'Practice mindfulness/meditation',
    },
    {
      id: 'strategy-exercise',
      value: 'Exercise Regularly',
      label: 'Exercise regularly',
    },
    { id: 'strategy-reward', value: 'Plan Rewards', label: 'Plan Rewards' },
    {
      id: 'strategy-coach',
      value: 'Connect with a Coach',
      label: 'Connect with a Coach (VIP Only)',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.quitPlanForm = this.fb.group({
      quitDate: ['', Validators.required],
      duration: ['', Validators.required],
      dailyCigarettes: [
        '',
        [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)],
      ],
      frequency: ['', Validators.required],
      cigaretteType: ['', Validators.required],
      cigaretteCost: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.pattern(/^\d{1,3}(,\d{3})*$|^\d+$/),
        ],
      ],
      currency: ['VND', Validators.required],
      otherReasons: [''],
      otherTriggers: [''],
      otherStrategies: [''],
      reasons: [[]],
      triggers: [[]],
      strategies: [[]],
    });

    const today = new Date();
    this.todayString = today.toISOString().split('T')[0];

    const savedPlan = localStorage.getItem('quitPlan');
    if (savedPlan) {
      this.quitPlanForm.patchValue(JSON.parse(savedPlan));
    }

    this.quitPlanForm.get('quitDate')?.valueChanges.subscribe(() => {
      this.validateQuitDate();
    });
  }

  ngOnInit() {
    const today = new Date();
    this.todayString = today.toISOString().split('T')[0];

    this.quitPlanService.getCurrentUserPlan().subscribe({
      next: (plan) => {
        this.quitPlanForm.patchValue(plan);
        this.isGuest = false;
      },
      error: (err) => {
        const currentUser = localStorage.getItem('currentUser');
        const savedPlan = localStorage.getItem('quitPlan');
        if (currentUser && savedPlan) {
          if (window.confirm('You have a quit plan saved in your browser from before you logged in. Would you like to save it to your account?')) {
            const planData = JSON.parse(savedPlan);
            this.quitPlanService.createPlan(planData).subscribe({
              next: (response) => {
                this.quitPlanForm.patchValue(planData);
                alert('Your guest plan has been saved to your account!');
                localStorage.removeItem('quitPlan');
                this.isGuest = false;
              },
              error: (err) => {
                alert('Failed to save your guest plan to your account.');
                console.log("Error: ", err);
                this.quitPlanForm.patchValue(planData);
                this.isGuest = true;
              },
            });
          } else {
            this.quitPlanForm.patchValue(JSON.parse(savedPlan));
            this.isGuest = true;
          }
        } else if (!currentUser && savedPlan) {
          // Guest
          this.quitPlanForm.patchValue(JSON.parse(savedPlan));
          this.isGuest = true;
        } else {
          alert('No plan found.');
        }
      },
    });

    this.quitPlanForm.get('quitDate')?.valueChanges.subscribe(() => {
      this.validateQuitDate();
    });
  }

  validateQuitDate() {
    const quitDateValue = this.quitPlanForm.get('quitDate')?.value;
    if (!quitDateValue) {
      this.quitDateWarning = '';
      return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); //ignore hours, minutes, seconds
    const quitDate = new Date(quitDateValue);
    quitDate.setHours(0, 0, 0, 0);

    if (quitDate < today) {
      this.quitDateWarning = 'The quit date cannot be before today.';
      return false;
    }

    const diffDays = Math.ceil(
      (quitDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    if (diffDays > 7) {
      this.quitDateWarning =
        'We recommend choosing a start date as close as possible (within 7 days).';
      return true;
    }

    this.quitDateWarning = '';
    return true;
  }

  toggleCheckBox(field: 'reasons' | 'triggers' | 'strategies', value: string) {
    const arr = this.quitPlanForm.value[field] as string[];
    if (arr.includes(value)) {
      this.quitPlanForm.patchValue({ [field]: arr.filter((v) => v !== value) });
    } else {
      this.quitPlanForm.patchValue({ [field]: [...arr, value] });
    }
  }

  formatCostInput() {
    const control = this.quitPlanForm.get('cigaretteCost');
    let value = control?.value?.replace(/,/g, '') || '';
    if (!/^\d*$/.test(value)) {
      value = value.replace(/\D/g, '');
    }
    if (value) {
      value = Number(value).toLocaleString();
    }
    control?.setValue(value, { emitEvent: false });
  }

  onSubmit() {
    if (!this.validateQuitDate()) {
      return;
    }

    const formValue = this.quitPlanForm.value;

    // Map frontend fields to backend DTO
    const planData = {
      startDate: formValue.quitDate,
      durationWeeks: Number(formValue.duration),
      numberOfCigarettes: Number(formValue.dailyCigarettes),
      pricePerPack: Number(String(formValue.cigaretteCost).replace(/,/g, '')),
      currency: formValue.currency,
      reasons: formValue.reasons.concat(
        formValue.otherReasons ? [formValue.otherReasons] : []
      ),
      triggers: formValue.triggers.concat(
        formValue.otherTriggers ? [formValue.otherTriggers] : []
      ),
      strategies: formValue.strategies.concat(
        formValue.otherStrategies ? [formValue.otherStrategies] : []
      ),
      cigaretteType: formValue.cigaretteType,
      frequency: formValue.frequency,
    };

    if (this.isGuest) {
      localStorage.setItem('quitPlan', JSON.stringify(planData));
      alert('Your personalized quit plan has been saved (locally)!');
      this.router.navigate(['/plan-view']);
    } else {
      this.quitPlanService.createPlan(planData).subscribe({
        next: (response) => {
          localStorage.setItem('quitPlan', JSON.stringify(planData));
          alert('Your personalized quit plan has been saved!');
          this.router.navigate(['/plan-view']);
        },
        error: (err) => {
          alert('Failed to save your quit plan. Please try again.');
          console.log("Error: ", err)
        },
      });
    }
  }
}
