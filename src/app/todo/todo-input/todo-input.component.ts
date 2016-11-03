import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../contracts/todo.model';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  todo: Todo;
  isEditMode: boolean = false;

  @Input() editTodo: Todo;
  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { 
    this.setDefaultTodo();
  }

  ngOnInit() {
  }

  /**
   * Read for editTodo Changes
   */
  ngOnChanges(changes){
    if(!changes.editTodo)
      return;

    if(this.editTodo != undefined){
      this.todo = this.editTodo;
      this.isEditMode = true;
    }      
  }

  addTodo() {
    this.create.emit(this.todo);
    //empty input
    this.setDefaultTodo();
  }

  updateTodo() {
    this.update.emit(this.todo);
    this.setDefaultTodo();
    this.isEditMode = false;
  }

  setDefaultTodo(): void{
    this.todo = {
      id: null, 
      text: '', 
      completed: false
    };
  }

}
