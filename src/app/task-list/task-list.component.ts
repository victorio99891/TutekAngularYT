import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChildTaskListComponent} from './child-task-list/child-task-list.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskList: Array<string> = [
    'Wash your hands',
    'Eat healthy breakfast',
    'Turn off notifications on your desktop'
  ];

  doneTaskList: Array<string> = [];

  @ViewChild('childRef')
  childComponent: ChildTaskListComponent;

  @ViewChild('inputText')
  inputText: ElementRef;
  inputError: boolean = false;
  isLoaded: boolean = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(()=>{
      this.isLoaded = true;
    },1000)
  }

  add(task: HTMLInputElement) {
    if (task.value != '') {
      this.taskList.push(task.value);
      console.log(this.inputText.nativeElement.value);
      // NOT RECOMMENDED IF NOT NECESSARY
      this.inputText.nativeElement.value = '';
    } else {
      this.inputError = true;
    }
  }

  selected(event: string) {
    alert(event);
  }

  done(task: string) {
    this.doneTaskList.push(task);
  }

  cancelError() {
    this.inputError = false;
  }
}
