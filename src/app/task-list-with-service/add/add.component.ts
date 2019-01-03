import {Component, OnInit} from '@angular/core';
import {TaskService} from '../service/taskService';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  currentTask: string = '';

  constructor(public tskService: TaskService) {
  }

  ngOnInit() {
  }

  add() {
    if (this.currentTask != '') {
      this.tskService.add(this.currentTask);
    }
  }
}
