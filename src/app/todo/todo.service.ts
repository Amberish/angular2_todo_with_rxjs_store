import { Injectable } from '@angular/core';
import { Todo } from './contracts/todo.model';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ADD_TODO, EDIT_TODO } from './reducers';

@Injectable()
export class TodoService {
  
  private todos: any;

  constructor(private _store: Store<any>) { 
    _store.select('todos')
          .subscribe(todos => this.todos = todos);
  }

  make(todoText: string, todos: Todo[]): Todo{
    return {
      id: todos.length + 1,
      text: todoText,
      completed: false
    }
  }

  add(todo: any): void{
    if(typeof todo == "string")
      todo = this.make(todo, this.todos);

    if(todo.id == null)
      todo.id = this.todos.length + 1;

    this._store.dispatch({type:ADD_TODO, payload: todo});
    //todos.push(todo);
  }

  edit(todo: any): void{
    this._store.dispatch({type: EDIT_TODO, payload: todo})
  }
}
