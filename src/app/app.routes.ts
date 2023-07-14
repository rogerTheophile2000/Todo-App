import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { TodoService } from './core/services/todo.service';

export const routes: Routes = [
    {
        path:'login',
        title: 'Login| TodoApp',
        loadComponent: () => import('./components/auth/login.component'),
    },
    {
        path:'register',
        title: 'Register| TodoApp',
        loadComponent: () => import('./components/auth/register.component'),
    },
    {
        path:'todos',
        title: 'Todos| TodoApp',
        canActivate:[()=> inject(TodoService).isLogin()],
        loadComponent: () => import('./components/todo/todo.component'),
    },
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'todos',
        pathMatch: 'full',
    },
];
