import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-compo5',
  templateUrl: './test-compo5.component.html',
  styleUrls: ['./test-compo5.component.css']
})
export class TestCompo5Component implements OnInit {
  isDisable: boolean = true;
  inputText: string = 'empty';
  colorClass: string = 'color';

  constructor() {
  }

  ngOnInit() {
  }

  onFocus() {
    this.colorClass = 'color2';
  }

  onClick(event) {
    console.log(event);
  }

  onPaste() {
    this.inputText = 'Nie wklejaj wpisz samodzielnie!';
  }


  onMouseMove(event) {
    console.log('x: ' + event.clientX + ' y: ' + event.clientY);
  }

  change() {
    this.isDisable = false;
  }
}
