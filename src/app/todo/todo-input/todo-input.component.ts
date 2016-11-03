import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../contracts/todo.model';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todo: Todo;

  @Output() create: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.setDefaultTodo();
  }

  ngOnInit() {
  }

  addTodo() {
    this.create.emit(this.todo);
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
