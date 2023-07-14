import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    <app-toolbar [isRegisterBtnShow]="true"></app-toolbar>
    <form action="" [formGroup]="registerForm" class="form-container" (ngSubmit)="onSubmit()">
      <h2 class="title">Connectez-vous</h2>
      <h3 class="sub-title">
        Veuillez entrer vos identifiants. <a routerLink="/login">Se Connecter</a>
      </h3><br>
      <input type="text" placeholder="Nom complet" formControlName="nomComplet">
      <input type="email" placeholder="Email" formControlName="email" />
      <input type="password" placeholder="Mot de passe" formControlName="password">
      <button 
        class="auth-btn"
        [ngClass]="{'active-btn' : !registerForm.invalid}"
        [disabled]="registerForm.invalid" type="submit"
        (click)="onSubmit()">
        S'inscrire
      </button>
    </form> 

  `,
  styles: [`
    @use '../shared/_form.style.scss' as *;
  `]
})
export default class LoginComponent {
  registerForm = new FormGroup({
    
    nomComplet: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  onSubmit() { }
}
