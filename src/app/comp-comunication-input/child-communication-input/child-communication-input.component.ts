import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-communication-input',
  templateUrl: './child-communication-input.component.html',
  styleUrls: ['./child-communication-input.component.css']
})
export class ChildCommunicationInputComponent implements OnInit {


  @Input()
  tasks: string[];

  @Output()
  eventTask = new EventEmitter<string>();

  @Output()
  randomNumber = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  select(task: string) {
    this.eventTask.emit(task);
  }

  getRandomNumber() {
    let myNumber = Math.floor(Math.random() * 100);
    this.randomNumber.emit(myNumber);
  }
}
