import {Component, OnInit} from '@angular/core';
import {Task} from './task';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  taskText: string = '';

  taskList: Array<Task> = [
    new Task('Umyj zęby')
  ];
  doneTaskList: Array<Task> = [];

  constructor() {
  }

  ngOnInit() {
  }

  addNewTask() {
    if (this.taskText != '') {
      this.taskList.push(new Task(this.taskText));
      console.log(this.taskList);
      this.taskText = '';
    }
  }

  deleteTask(index: number) {
    // this.taskList.splice(index, 1);
    //Another way to delete element: (normally task as argument) but better on index!
    let task: Task = this.taskList[index];
    this.taskList = this.taskList.filter(element => element !== task);
  }

  tagAsDone(index) {
    let task: Task = this.taskList[index];
    task.taskDone = new Date();
    task.taskTime = task.taskDone.valueOf() - task.taskStart.valueOf();
    this.doneTaskList.push(task);
    this.taskList.splice(index, 1);
  }

  addNewTaskByEnter(event) {
    if (event.key === 'Enter') {
      if (this.taskText != '') {
        this.taskList.push(new Task(this.taskText));
        console.log(this.taskList);
        this.taskText = '';
      }
    }
  }

  timeConverter(taskTime: number) {
    let timeString: string;
    let seconds: number = Math.floor(taskTime / (1000));
    timeString = `${seconds} seconds`;
    return timeString;
  }
}
