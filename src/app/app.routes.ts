import { Routes } from '@angular/router';
import { HomePageContext } from './pages/home-page-context/home-page-context';

export const routes: Routes = [
    { path: '', redirectTo: '/home/process', pathMatch: 'full' },
    {
        path: 'home',
        component: HomePageContext,
        children: [
            { path: '', redirectTo: '/home/process', pathMatch: 'full' },
            {
                path: 'process',
                loadComponent: () => import('./pages/home-page/home-page').then((ob) => ob.HomePage),
                title: 'POS | HOME',
            },
            {
                path: 'login',
                loadComponent: () =>
                    import('./pages/auth/login-page/login-page').then((ob) => ob.LoginPage),
                title: 'Login Now',
            },
            {
                path: 'signup',
                loadComponent: () =>
                    import('./pages/auth/register-page/register-page').then((ob) => ob.RegisterPage),
                title: 'Sign up',
            },
        ],
    },
    {
        path: 'dashboard',
        loadComponent: () =>
            import('./pages/dashboard-page/dashboard-page').then((ob) => ob.DashboardPage),
        title: 'Dashboard',
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/not-found-page/not-found-page').then((ob) => ob.NotFoundPage),
        title: '404 | Not Found',
    },
];
