import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
    { path: 'signup', loadComponent: () => import('./signup/signup').then(m => m.Signup) },
    { path: 'homepage', loadComponent: () => import('./homepage/homepage').then(m => m.Homepage) },
    { path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.Blog) },
    { path: 'admin-dashboard', loadComponent: () => import('./admin-dashboard/admin-dashboard').then(m => m.AdminDashboard),
        children: [
            {
                path: 'members',
                loadComponent: () => import('./admin-dashboard/members/admin-members').then(m => m.AdminMembers),
            },
            {
                path: 'coaches',
                loadComponent: () => import('./admin-dashboard/coaches/admin-coaches').then(m => m.AdminCoaches),
            },
            {
                path: 'staffs',
                loadComponent: () => import('./admin-dashboard/staffs/admin-staffs').then(m => m.AdminStaffs),
            },
            {
                path: 'admins',
                loadComponent: () => import('./admin-dashboard/admins/admin-admins').then(m => m.AdminAdmins),
            }
        ],
     },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }