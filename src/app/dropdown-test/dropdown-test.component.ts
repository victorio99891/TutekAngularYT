import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-test',
  templateUrl: './dropdown-test.component.html',
  styleUrls: ['./dropdown-test.component.css']
})
export class DropdownTestComponent implements OnInit {
  redSquare: boolean = true;
  greenSquare: boolean = false;
  purpleSquare: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  showRed() {
    this.redSquare = true;
    this.greenSquare = false;
    this.purpleSquare = false;
  }

  showGreen() {
    this.redSquare = false;
    this.greenSquare = true;
    this.purpleSquare = false;
  }

  showPurple() {
    this.redSquare = false;
    this.greenSquare = false;
    this.purpleSquare = true;
  }
}
