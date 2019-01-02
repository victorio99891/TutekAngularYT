import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-done-task-list',
  templateUrl: './done-task-list.component.html',
  styleUrls: ['./done-task-list.component.css']
})
export class DoneTaskListComponent implements OnInit {
  @Input()
  doneTask: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

}
