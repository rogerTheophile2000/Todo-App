import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="toolbar">
      <a routerLink="/" class="app-title">Todo App</a>
      <button class="toolbar-btn" routerLink="/register" *ngIf="isLoginBtnShow">S'inscrire</button>
      <button class="toolbar-btn" routerLink="/login" *ngIf="isRegisterBtnShow" >Se connecter</button>
      <button class="toolbar-btn" routerLink="/login" *ngIf="isLogoutBtnShow" >Log out</button>
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
  `]
})
export default class ToolbarComponent {
  @Input() isLoginBtnShow!: boolean;
  @Input() isRegisterBtnShow!: boolean;
  @Input() isLogoutBtnShow!: boolean;
}
