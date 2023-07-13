import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  template: `
    <app-toolbar [isLoginBtnShow]="true"></app-toolbar>
  `,
  styles: [
  ]
})
export default class LoginComponent {

}
