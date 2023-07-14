import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
    ReactiveFormsModule,
    RouterModule,
  ],
  template: `
    <app-toolbar [isLoginBtnShow]="true"></app-toolbar>
    <form FormGroup="loginForm" class="form-container" (ngSubmit)="onSubmit()">
      <h2 class="title">Connectez-vous</h2>
      <h3 class="sub-title">
        Veuillez entrer votre email <a routerLink="/register">Enregistrez-vous</a>
      </h3><br>
      <input type="email" placeholder="Email" formControlName="email" />
      <p **ngIf="showError">{{ errorMsg }}</p>
      <button class="auth-btn" [disabled]="loginForm.invalid" type="submit">Connexion</button>
    </form>
  `,
  styles: [
  ]
})
export default class LoginComponent {
  showError = false;
  errorMsg="Cet email n'existe pas, veuillez vous inscrire";
  loginForm = new FormGroup({});
  onSubmit(){}
}
