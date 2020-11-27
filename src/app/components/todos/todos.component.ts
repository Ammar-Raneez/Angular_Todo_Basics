import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService : TodoService) {
    
  }

  ngOnInit(): void {
    //similar to .then() of promises
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  deleteTodo(deleteTodo: Todo) {
    //Remove from UI
    this.todos = this.todos.filter(todo => todo.id !== deleteTodo.id);
    //Remove from server
    this.todoService.deleteTodo(deleteTodo).subscribe();
  }
}
