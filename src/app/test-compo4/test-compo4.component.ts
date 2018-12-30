import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-compo4',
  templateUrl: './test-compo4.component.html',
  styleUrls: ['./test-compo4.component.css']
})
export class TestCompo4Component implements OnInit {

  inputText: string = 'Tekst';
  maxLength: number = 5;
  colorClass: string = 'color';
  logoUrl: string = '';

  isDisable: boolean = true;

  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
  }

  ngOnInit() {
  }

  change() {
    this.inputText = 'Zmiana tekstu i koloru!';
    this.maxLength = 10;
    this.colorClass = 'color2';
    this.logoUrl = 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
  }

}
