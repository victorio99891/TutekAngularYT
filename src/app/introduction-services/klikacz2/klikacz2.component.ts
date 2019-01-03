import {Component, OnInit} from '@angular/core';
import {ClickService} from '../../services/click.service';

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css']
  //providers: [ClickService] //<<-- instance for this child (not exist as singleton in app)
})
export class Klikacz2Component implements OnInit {

  clickCounter: number = 0;

  addClick(): void {
    this.clickCounter++;
    this.clickService.addClics();
  }

  constructor(private clickService: ClickService) {
  }

  ngOnInit() {
  }

}
