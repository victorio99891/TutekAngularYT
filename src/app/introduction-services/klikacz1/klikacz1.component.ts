import {Component, OnInit} from '@angular/core';
import {ClickService} from '../../services/click.service';
import {LogService} from '../../services/log.service';

@Component({
  selector: 'app-klikacz1',
  templateUrl: './klikacz1.component.html',
  styleUrls: ['./klikacz1.component.css']
  //providers: [ClickService] //<<-- instance for this child (not exist as singleton in app)
})
export class Klikacz1Component implements OnInit {

  clickCounter: number = 0;


  constructor(private clickService: ClickService) {

  }

  addClick(): void {
    this.clickCounter++;
    this.clickService.addClics();
  }


  ngOnInit() {
  }

}
