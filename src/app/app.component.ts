import { Component, Output, EventEmitter } from '@angular/core';

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

  @Output()
  add: EventEmitter<Todo> = new EventEmitter();

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

  onRemoveTodo(todo) {
    this.todoService
      .deleteTodoById(todo.id)
      .subscribe(
        () => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

  addTodo() {
    this.todoService
      .addTodo(this.newTodo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
    this.newTodo = new Todo();
  }

}
