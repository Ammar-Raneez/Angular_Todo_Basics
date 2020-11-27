import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const todo = {
      //input is already bound to the title through the ngModel 
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}