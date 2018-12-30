import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../to-do-list/task';

@Component({
  selector: 'app-to-do-list-multi',
  templateUrl: './to-do-list-multi.component.html',
  styleUrls: ['./to-do-list-multi.component.css']
})
export class ToDoListMultiComponent implements OnInit {

  tasksList: Array<Task> = [
    new Task('Brush teeth!')
  ];

  tasksDone: Array<Task> = [];


  constructor() {
  }

  ngOnInit() {
  }


  add(task: Task) {
    this.tasksList.push(task);
  }

  done(index: number) {
    let task: Task = this.tasksList[index];
    task.taskDone = new Date();
    task.taskTime = task.taskDone.valueOf() - task.taskStart.valueOf();
    this.tasksDone.push(task);
    this.tasksList.splice(index, 1);
  }

  remove(index: number) {
    this.tasksList.splice(index, 1);
  }
}
