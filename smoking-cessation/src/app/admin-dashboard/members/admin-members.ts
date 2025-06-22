import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Member {
  id: string;
  username: string;
  email: string;
  fullName: string;
}

@Component({
  selector: 'app-admin-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-members.html',
  styleUrls: ['./admin-members.css'],
})

export class AdminMembers {
  members: Member[] = [
    {
      id: 'MB001',
      username: 'member1',
      email: 'member1@gmail.com',
      fullName: 'Nguyen Van D',
    },
    {
      id: 'MB002',
      username: 'member2',
      email: 'member2@gmail.com',
      fullName: 'Tran Thi E',
    },
    {
      id: 'MB003',
      username: 'member3',
      email: 'member3@gmail.com',
      fullName: 'Le Van F',
    },
  ];
}
