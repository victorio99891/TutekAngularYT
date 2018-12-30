import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-compo',
  templateUrl: './test-compo.component.html',
  styleUrls: ['./test-compo.component.css']
})
export class TestCompoComponent implements OnInit {

  field1: string = 'Content!';

  field2: Date = new Date(2011, 10, 5, 15, 31, 24);

  field3: number = 2.32321323;

  item: Item = new Item('Latarka');


  constructor() {
  }

  ngOnInit() {
  }

  toggleTrue: boolean = true;

  changeContent() {
    if (this.toggleTrue) {
      this.field1 = 'Content from button!';
      this.toggleTrue = false;
    } else {
      this.field1 = '';
      this.toggleTrue = true;
    }

  }
}

class Item {
  name: string;

  constructor(nam: string) {
    this.name = nam;
  }

  showItem = () => {
    return 'Name: ' + this.name;
  };
}
