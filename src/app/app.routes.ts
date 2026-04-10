import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import("./pages/home-page/home-page").then(m => m.HomePage), title: 'Pos | Home' },
    { path: '**', redirectTo: '/home' }
];
