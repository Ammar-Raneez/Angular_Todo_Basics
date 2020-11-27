import { Injectable } from '@angular/core';
import { Todo } from '../models/Todos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl: string =  'https://jsonplaceholder.typicode.com/todos';
  todosLimit: string = '?_limit=5';

  constructor(private http : HttpClient) { 
  }
  
  //Get todos
  getTodos() : Observable<Todo[]> {
    //Observable is asynchronous, something like a promise
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`);
  }

  //Add todos {
    addTodo(todo: Todo): Observable<Todo> {
      return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
    }

  //delete todos
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`
    //since Observable is a generic type, we need to specificy the return type
    return this.http.delete<Todo>(url, httpOptions);
  }

  //Toggle Completed
  toggleCompleted(todo: Todo) : Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions);
  }
}
