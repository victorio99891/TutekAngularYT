import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp-comunication-input',
  templateUrl: './comp-comunication-input.component.html',
  styleUrls: ['./comp-comunication-input.component.css']
})
export class CompComunicationInputComponent implements OnInit {

  taskList: string[] = ['Mycie podłogi', 'Wbijanie gwoździa', 'Sprzątanie kibla'];
  itemString: string;

  constructor() {
  }

  ngOnInit() {
  }

  selected(task: string) {
    this.itemString = task;
  }

  getRnd(number: number) {
    console.log(number);
  }
}
