import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  template: `
    <app-toolbar [isLogoutBtnShow]="true"></app-toolbar>
  `,
  styles: [
  ]
})
export default class TodoComponent {

}
