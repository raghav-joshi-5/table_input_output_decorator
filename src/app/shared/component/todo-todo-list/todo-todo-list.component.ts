import { Component, Input, OnInit } from '@angular/core';
import { Itodos } from '../module/todos';

@Component({
  selector: 'app-todo-todo-list',
  templateUrl: './todo-todo-list.component.html',
  styleUrls: ['./todo-todo-list.component.scss'],
})
export class TodoTodoListComponent implements OnInit {
  @Input() sendmassage!: Array<Itodos>;
  constructor() {}

  ngOnInit(): void {}
}
