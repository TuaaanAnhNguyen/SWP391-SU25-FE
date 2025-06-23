import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Coach {
  id: string;
  username: string;
  email: string;
  fullName: string;
}

@Component({
  selector: 'app-admin-coaches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-coaches.html',
  styleUrls: ['./admin-coaches.css'],
})

export class AdminCoaches {
  coaches: Coach[] = [
    {
      id: 'CH001',
      username: 'coach1',
      email: 'coach1@gmail.com',
      fullName: 'Nguyen Van J',
    },
    {
      id: 'CH002',
      username: 'coach2',
      email: 'coach2@gmail.com',
      fullName: 'Tran Thi K',
    },
    {
      id: 'CH003',
      username: 'coach3',
      email: 'coach3@gmail.com',
      fullName: 'Le Van L',
    },
  ];
}
