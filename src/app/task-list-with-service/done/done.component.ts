import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/taskService';
import {TaskModel} from '../models/task.model';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  doneTasks: Array<TaskModel> = [];

  constructor(private tskService: TaskService) {
    this.tskService.getDoneTasksObs().subscribe((items: Array<TaskModel>) => {
      this.doneTasks = items;
    });
  }

  ngOnInit() {
  }

}
