import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Staff {
  id: string;
  username: string;
  email: string;
  fullName: string;
}

@Component({
  selector: 'app-admin-staffs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-staffs.html',
  styleUrls: ['./admin-staffs.css'],
})

export class AdminStaffs {
  staffs: Staff[] = [
    {
      id: 'ST001',
      username: 'staff1',
      email: 'staff1@gmail.com',
      fullName: 'Pham Van G',
    },
    {
      id: 'ST002',
      username: 'staff2',
      email: 'staff2@gmail.com',
      fullName: 'Do Thi H',
    },
    {
      id: 'ST003',
      username: 'staff3',
      email: 'staff3@gmail.com',
      fullName: 'Hoang Van I',
    },
  ];
}
