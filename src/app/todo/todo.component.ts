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

  constructor(private service: TodoService) { }

  ngOnInit() {
  }

  addTodo(todo: Todo){
    this.service.add(todo);
  }

  editTodo(todo: Object) {
    this.service.edit(todo);
  }

}
