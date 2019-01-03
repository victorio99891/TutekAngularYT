import {Component, OnInit} from '@angular/core';
import {ClickService} from '../services/click.service';

@Component({
  selector: 'app-introduction-services',
  templateUrl: './introduction-services.component.html',
  styleUrls: ['./introduction-services.component.css'],
  providers: [ClickService] // all children will have access to the same instance of service
})
export class IntroductionServicesComponent implements OnInit {

  sumOfClicks: number = 0;

  constructor(public clickService: ClickService) {

  }

  ngOnInit() {
    this.clickService.getSum().subscribe(clickNumber => this.sumOfClicks = clickNumber);
  }

}
