import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quit-plan',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quit-plan.html',
  styleUrl: './quit-plan.css',
})
export class QuitPlan {
  quitPlanForm: FormGroup;
  quitDateWarning: string = '';
  todayString: string;

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
      quitDate: [''],
      duration: [''],
      dailyCigarettes: [''],
      frequency: [''],
      cigaretteType: [''],
      cigaretteCost: [''],
      otherReasons: [''],
      otherTriggers: [''],
      otherStrategies: [''],
      reasons: [[]],
      triggers: [[]],
      strategies: [[]],
    });

    const today = new Date();
    this.todayString = today.toISOString().split('T')[0];

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

  onSubmit() {
    if (!this.validateQuitDate()) {
      return;
    }

    const planData = this.quitPlanForm.value;
    console.log('Your Personalized Quit Plan Data: ', planData);
    alert('Testing! Your personalized quit plan has been saved!');
  }
}
