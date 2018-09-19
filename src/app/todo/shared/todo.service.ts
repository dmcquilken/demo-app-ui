import { Injectable } from '@angular/core';
import { Todo } from '../todo';
import { ApiService } from '../../shared/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService {

  constructor(
    private api: ApiService
  ) {
  }

  // Simulate GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  addTodo(todo) {
    return this.api.createTodo(todo);
  }

  deleteTodoById(todoId: string) {
    return this.api.deleteTodoById(todoId);
  }

}
