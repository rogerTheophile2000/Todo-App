import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TodoService } from 'src/app/core/services/todo.service';

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
      <input type="password" placeholder="Mot de passe" formControlName="password" />
      <p *ngIf="showError">{{ errorMsg }}</p>
      <button class="auth-btn" [ngClass]="{'active-btn' : !loginForm.invalid}" [disabled]="loginForm.invalid" type="submit" (click)="onSubmit()">Connexion</button>
    </form> 
  `,
  styles: [`
    p {
      color: red;
    }
  `]
})
export default class RegisterComponent {
  showError = false;
  errorMsg = "Email ou password incorect, veuillez vous inscrire";
  
  private ts = inject(TodoService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  async onSubmit() {
    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;
    const user =  await this.ts.logIn(email);
    if(user?.email === email && user.password === password){
      localStorage.setItem('email', email);
      this.router.navigateByUrl('/todos');
    } else {
      this.showError = true;
    }
  }
}
