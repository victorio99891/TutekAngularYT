import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../to-do-list/task';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent implements OnInit {

  @Input()
  doneTaskList: Array<Task>;


  constructor() {
  }

  ngOnInit() {
  }

  timeConverter(taskTime: number) {
    let timeString: string;
    let seconds: number = Math.floor(taskTime / (1000));
    timeString = `${seconds} seconds`;
    return timeString;
  }

}
