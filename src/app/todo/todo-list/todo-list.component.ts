import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../contracts/todo.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Observable<any>;
  
  constructor(private _store: Store<any>) { 
    this.todos = this._store.select('todos');;
  }

  ngOnInit() {}

}
