import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../../to-do-list/task';

@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  inputTaskLabel: string = '';

  @Output()
  sendNewTask = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit() {
  }

  addNewTask() {
    if (this.inputTaskLabel != '') {
      this.sendNewTask.emit(new Task(this.inputTaskLabel));
      this.inputTaskLabel = '';
    }
  }

  addNewByHitEnter(event) {
    if (event.key === 'Enter') {
      this.addNewTask();
    }
  }
}
