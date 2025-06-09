import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./login/login').then(m => m.Login) },
    { path: 'signup', loadComponent: () => import('./signup/signup').then(m => m.Signup) },
    { path: 'homepage', loadComponent: () => import('./homepage/homepage').then(m => m.Homepage) },
    { path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.Blog) },
    { path: 'dashboard', loadComponent: () => import('./admin-dashboard/admin-dashboard').then(m => m.AdminDashboard) },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }