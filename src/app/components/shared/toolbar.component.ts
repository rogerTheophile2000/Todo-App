import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="toolbar">
      <a routerLink="/" class="app-title">Todo App</a>
      <button class="toolbar-btn" routerLink="/register" *ngIf="isLoginBtnShow">S'inscrire</button>
      <button 
        class="toolbar-btn" 
        routerLink="/login" 
        *ngIf="isRegisterBtnShow" >
        Se connecter
      </button>
      <div class="avatar-logout-btn" *ngIf="isLogoutBtnShow">
        <div class="user-avatar">
          {{ (users | async)![0].email[0] }}
        </div>
        <button 
          class="toolbar-btn" routerLink="/login" 
          (click)="logout()" >
          Se deconnecter
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .toolbar{
      height: 4rem;
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
      border-bottom: 0.1px #28281a solid;
      position: sticky;
      top: 0;
    }

    .app-title{
      text-decoration:none;
      color:inherit;
      font-size: 2rem;
      font-weight: bold;
    }

    .toolbar-btn {
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      background: #252525;
      font-size:1.2rem;
      transition: transform 250ms;
    }
    .toolbar-btn:hover {
      cursor:pointer;
      transform: scale(1.1);
    }

    .avatar-logout-btn {
      display: flex;
      align-items:center;

      & > * {
        margin-left: 1rem;
      }
    }

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius:50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: steelblue;
      font-size: 1.3rem;
      font-weight: bolder;
      text-transform: uppercase;
    }
  `]
})
export default class ToolbarComponent {
  @Input() isLoginBtnShow!: boolean;
  @Input() isRegisterBtnShow!: boolean;
  @Input() isLogoutBtnShow!: boolean;

  readonly users = inject(TodoService).getUsers();

  logout = () => localStorage.removeItem('email');
}
