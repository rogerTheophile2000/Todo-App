import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    ReactiveFormsModule,
    RouterModule
  ],
  template: `
    <app-toolbar [isLoginBtnShow]="true"></app-toolbar>
    <form action="" [formGroup]="loginForm" class="form-container" (ngSubmit)="onSubmit()">
      <h2 class="title">Connectez-vous</h2>
      <h3 class="sub-title">
        Veuillez entrer votre email <a routerLink="/register">Enregistrez-vous</a>
      </h3><br>
      <input type="email" placeholder="Email" formControlName="email" />
      <p *ngIf="showError">{{ errorMsg }}</p>
      <input type="password" placeholder="Mot de passe" formControlName="password" />
      <button class="auth-btn" [ngClass]="{'active-btn' : !loginForm.invalid}" [disabled]="loginForm.invalid" type="submit" (click)="onSubmit()">Connexion</button>
    </form> 
  `,
  styles: [
  ]
})
export default class RegisterComponent {
  showError = false;
  errorMsg = "Email ou password incorect, veuillez vous inscrire";
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  onSubmit() { }
}
