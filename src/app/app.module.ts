import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { TodoTodoListComponent } from './shared/component/todo-todo-list/todo-todo-list.component';
import { TodoDashComponent } from './shared/component/todo-dash/todo-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoTodoListComponent,
    TodoDashComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
