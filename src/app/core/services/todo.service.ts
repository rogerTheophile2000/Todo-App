import { Injectable, inject } from '@angular/core';
import { AngularTodoDB } from './db';
import { User } from './user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  db = new AngularTodoDB();
  private router = inject(Router)

  //  operation sur l'auth du user
  logIn = (email:string) => this.db.users.get(email);
  newUser = (user:User) => this.db.users.add(user);
  getUsers = () => this.db.users.toArray()

  isLogin = () => {
    if(localStorage.getItem('email')){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
