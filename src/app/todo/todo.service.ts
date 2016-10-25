import { Injectable } from '@angular/core';
import { Todo } from './contracts/todo.model';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_TODO } from './reducers';

@Injectable()
export class TodoService {
  
  constructor(private _store: Store<any>) { }

  make(todoText: string, todos: Todo[]): Todo{
    return {
      id: todos.length + 1,
      text: todoText,
      completed: false
    }
  }

  add(todo: any, todos: Todo[]): void{
    if(typeof todo == "string")
      todo = this.make(todo, todos);

    if(todo.id == null)
      todo.id = todos.length + 1;

    this._store.dispatch({type:ADD_TODO, payload: todo});
    //todos.push(todo);
  }
}
