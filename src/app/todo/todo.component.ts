import { Component, OnInit } from '@angular/core';
import { Todo } from './contracts/todo.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodoService } from './todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo_edit: Todo;
  constructor(private service: TodoService) { }

  ngOnInit() {
    
  }

  addTodo(todo: Todo){    
    this.service.add(todo);
  }

  editTodo(todo: Todo) {
    this.todo_edit = todo;
  }

  updateTodo(todo: Todo) {
    this.service.edit(todo);
  }

}
