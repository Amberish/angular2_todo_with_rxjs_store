import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoInputComponent } from './todo/todo-input/todo-input.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFilterComponent } from './todo/todo-filter/todo-filter.component';
import { TodoService } from './todo/todo.service';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todos } from './todo/reducers';
import { filter } from './todo/reducers';

const reducers: Object = {
  todos,
  filter
};

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoInputComponent,
    TodoListComponent,
    TodoFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(reducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
