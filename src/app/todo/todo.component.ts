import { Component, OnInit } from '@angular/core';
import { Todo } from './contracts/todo.model';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  source: Observable<any>
  todos: Todo[];
  //subscription: Observable<any>;
  constructor(private _store: Store<any>) { 
    this.source = this._store.select('todos');
  }

  ngOnInit() {
  }

  getTodos(todos: Todo[]): void {
    this.source.subscribe(todos => this.todos = todos);
  }

}
