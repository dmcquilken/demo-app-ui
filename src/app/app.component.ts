import { Component } from '@angular/core';

import { TodoService } from './todo/shared/todo.service';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoService]
})
export class AppComponent {
  
  todos: Todo[] = [];
  newTodo: Todo = new Todo();

  constructor(
    private todoService: TodoService
  ) {
  }

  public ngOnInit() {
    this.todoService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }
}
