import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';
import { User } from 'src/app/core/models/user.model';

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
      <input type="text" placeholder="Nom complet" formControlName="nom">
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
  p{
    color:red
  }
  `]
})
export default class LoginComponent {
  private ts = inject(TodoService);
  private router = inject(Router);

  registerForm = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  async onSubmit() {
    const user: User = {
      nom : this.registerForm.value.nom!,
      email: this.registerForm.value.email!,
      password: this.registerForm.value.password!
    }

    localStorage.setItem('email', user.email);
    await this.ts.newUser(user);
    this.router.navigateByUrl('/todos');
  }
}
