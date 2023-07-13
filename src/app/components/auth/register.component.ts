import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  template: `
    <app-toolbar [isRegisterBtnShow]="true"></app-toolbar>
  `,
  styles: [
  ]
})
export default class RegisterComponent {

}
