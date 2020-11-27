import { Injectable } from '@angular/core';
import { Todo } from '../models/Todos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string =  'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http : HttpClient) { 

  }
  
  getTodos() : Observable<Todo[]> {
    //Observable is asynchronous, something like a promise
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }
}
