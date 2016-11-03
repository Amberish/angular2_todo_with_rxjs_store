import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../contracts/todo.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EDIT_TODO } from '../reducers';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<any>;

  @Output() edit: EventEmitter<any> = new EventEmitter();
  
  constructor(private _store: Store<any>) { 
    this.todos = _store.select('todos');
  }

  ngOnInit() {}

  editTodo(item: Todo){
    this.edit.emit(item);
  }

}
