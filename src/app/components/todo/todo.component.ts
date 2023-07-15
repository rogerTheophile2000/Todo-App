import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import ToolbarComponent from '../shared/toolbar.component';
import { TodoService } from 'src/app/core/services/todo.service';
import { AddTodoComponent } from "./add-todo.component";
import { TofoListComponent } from "./tofo-list.component";

@Component({
    selector: 'app-todo',
    standalone: true,
    template: `
    <app-toolbar [isLogoutBtnShow]="true"></app-toolbar>
    <app-add-todo></app-add-todo>
    <app-tofo-list></app-tofo-list>
  `,
    styles: [],
    imports: [CommonModule, ToolbarComponent, AddTodoComponent, TofoListComponent]
})
export default class TodoComponent {
  
}
