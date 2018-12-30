import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-compo3',
  templateUrl: './test-compo3.component.html',
  styleUrls: ['./test-compo3.component.css']
})
export class TestCompo3Component implements OnInit {

  title: string = 'Dni tygodnia!';

  days: string[] = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  isSundayHidden: boolean = false;
  isOthersHidden: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }


  hideSunday() {
    this.isSundayHidden = !this.isSundayHidden;
  }

  hideOtherDays() {
    this.isOthersHidden = !this.isOthersHidden;
  }
}
