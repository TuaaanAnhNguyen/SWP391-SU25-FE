import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Admin {
  id: string;
  username: string;
  email: string;
  fullName: string;
}

@Component({
  selector: 'app-admin-admins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-admins.html',
  styleUrls: ['./admin-admins.css'],
})

export class AdminAdmins {
  admins: Admin[] = [
    {
      id: 'ADM001',
      username: 'adminuser1',
      email: 'admin1@gmail.com',
      fullName: 'Nguyen Van A',
    },
    {
      id: 'ADM002',
      username: 'adminuser2',
      email: 'admin2@gmail.com',
      fullName: 'Tran Thi B',
    },
    {
      id: 'ADM003',
      username: 'adminuser3',
      email: 'admin3@gmail.com',
      fullName: 'Le Van C',
    },
  ];
}
