import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestCompoComponent } from './test-compo/test-compo.component';
import { TestCompo2Component } from './test-compo2/test-compo2.component';
import { TestCompo3Component } from './test-compo3/test-compo3.component';
import { TestCompo4Component } from './test-compo4/test-compo4.component';
import {FormsModule} from '@angular/forms';
import { TestCompo5Component } from './test-compo5/test-compo5.component';
import { TestCompo6Component } from './test-compo6/test-compo6.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CompComunicationInputComponent } from './comp-comunication-input/comp-comunication-input.component';
import { ChildCommunicationInputComponent } from './comp-comunication-input/child-communication-input/child-communication-input.component';
import { ToDoListMultiComponent } from './to-do-list-multi/to-do-list-multi.component';
import { AddComponentComponent } from './to-do-list-multi/add-component/add-component.component';
import { DoneListComponent } from './to-do-list-multi/done-list/done-list.component';
import { TodoListComponent } from './to-do-list-multi/todo-list/todo-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { ChildTaskListComponent } from './task-list/child-task-list/child-task-list.component';
import { DoneTaskListComponent } from './task-list/done-task-list/done-task-list.component';
import { IntroductionServicesComponent } from './introduction-services/introduction-services.component';

@NgModule({
  declarations: [
    AppComponent,
    TestCompoComponent,
    TestCompo2Component,
    TestCompo3Component,
    TestCompo4Component,
    TestCompo5Component,
    TestCompo6Component,
    ToDoListComponent,
    CompComunicationInputComponent,
    ChildCommunicationInputComponent,
    ToDoListMultiComponent,
    AddComponentComponent,
    DoneListComponent,
    TodoListComponent,
    TaskListComponent,
    ChildTaskListComponent,
    DoneTaskListComponent,
    IntroductionServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
