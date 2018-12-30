import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../to-do-list/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  currentTaskList: Array<Task>;

  @Output()
  emitDone = new EventEmitter<number>();

  @Output()
  emitRemove = new EventEmitter<number>();


  constructor() {
  }

  ngOnInit() {
  }

  doneTask(index: number) {
    this.emitDone.emit(index);
  }

  removeTask(index: number) {
    this.emitRemove.emit(index);
  }
}

