import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/taskService';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  doneTasks: Array<string> = [];

  constructor(private tskService: TaskService) {
    this.tskService.getDoneTasksObs().subscribe((items: Array<string>) => {
      this.doneTasks = items;
    });
  }

  ngOnInit() {
  }

}
