import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.css']
})
export class TodoFilterComponent implements OnInit {

  @Output() filter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  filterSelected(filter: string){
    this.filter.emit(filter);
  }

}
