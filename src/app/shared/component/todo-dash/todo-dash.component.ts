import { Component, OnInit } from '@angular/core';
import { Itodos } from '../module/todos';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.scss'],
})
export class TodoDashComponent implements OnInit {
  todoArray: Array<Itodos> = [
    {
      todoId: '123',
      todoItem: 'Buy Milk',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
