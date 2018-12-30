import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-compo3',
  templateUrl: './test-compo3.component.html',
  styleUrls: ['./test-compo3.component.css']
})
export class TestCompo3Component implements OnInit {

  days: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];


  constructor() { }

  ngOnInit() {
  }

}
