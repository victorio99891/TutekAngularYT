import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-task-list',
  templateUrl: './child-task-list.component.html',
  styleUrls: ['./child-task-list.component.css']
})
export class ChildTaskListComponent implements OnInit {

  @Input()
  tasks: Array<string>;

  @Output()
  emitSelect = new EventEmitter<string>();

  @Output()
  emitDone = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  selectTask(index: number) {
    this.emitSelect.emit(this.tasks[index]);
  }

  getColor() {
    return this.tasks.length > 3 ? 'red' : 'blue';
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  doneTask(index: number) {
    this.emitDone.emit(this.tasks[index]);
    this.tasks.splice(index, 1);
  }
}
