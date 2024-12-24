import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTodoListComponent } from './todo-todo-list.component';

describe('TodoTodoListComponent', () => {
  let component: TodoTodoListComponent;
  let fixture: ComponentFixture<TodoTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
