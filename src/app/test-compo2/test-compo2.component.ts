import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-compo2',
  templateUrl: './test-compo2.component.html',
  styleUrls: ['./test-compo2.component.css']
})
export class TestCompo2Component implements OnInit {


  days: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

  constructor() {
  }

  ngOnInit() {
  }

}
