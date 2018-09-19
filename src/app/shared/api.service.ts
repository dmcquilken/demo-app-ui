import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllTodos(): Observable<any[]> {
    return this.http
      .get(API_URL + '/todos')
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public createTodo(todo): Observable<any> {
    return this.http
      .post(API_URL + '/todo', todo)
      .map(response => {
        return (response.json());
      })
      .catch(this.handleError);
  }

  public deleteTodoById(todoId: string): Observable<any> {
    return this.http
      .delete(API_URL + '/todo/' + todoId)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.log(error);
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
