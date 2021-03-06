import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/taskService';
import {TaskModel} from '../models/task.model';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  taskList: Array<TaskModel> = [];

  constructor(private tskService: TaskService) {
    this.tskService.getListTasksObs().subscribe((items: Array<TaskModel>) => {
      // slice can change refernece to make sortList pipe working! :)
      this.taskList = items.slice();
    });
    //this.taskList = this.tskService.tasksList;
  }

  ngOnInit() {
  }

  deleteTask(index: number) {
    this.tskService.remove(index);
  }

  doneTask(index: number) {
    this.tskService.done(index);
  }
}
