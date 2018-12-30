import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-compo6',
  templateUrl: './test-compo6.component.html',
  styleUrls: ['./test-compo6.component.css']
})
export class TestCompo6Component implements OnInit {
  profession: string = 'Programista';
  skill: string = 'Java EE';

  constructor() {
  }

  ngOnInit() {
  }

}
