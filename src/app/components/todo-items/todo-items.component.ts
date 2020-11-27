import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(): Object {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo : Todo): void {
    todo.completed = !todo.completed;
  }

  onDelete(todo : Todo): void {
    console.log("delete")
  }
}
