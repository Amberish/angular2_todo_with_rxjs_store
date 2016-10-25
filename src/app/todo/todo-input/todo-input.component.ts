import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../contracts/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todo: Todo;
  todos: Todo[] = [];

  constructor(private service: TodoService) { 
    this.setDefaultTodo();
  }

  ngOnInit() {
  }

  addTodo() {
    this.service.add(this.todo, this.todos);
    //empty input
    this.setDefaultTodo();
  }

  setDefaultTodo(): void{
    this.todo = {
      id: null, 
      text: '', 
      completed: false
    };
  }

}
