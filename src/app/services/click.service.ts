import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LogService} from './log.service';

@Injectable({
  providedIn: 'root'
})
export class ClickService {


  sumOfBaitClicks: number = 0;

  private sum = new Subject<number>();


  constructor(private log: LogService) {
  }

  addClics() {
    this.sumOfBaitClicks += 1;
    this.sum.next(this.sumOfBaitClicks);
    this.log.logger(
      'Kliknięcie');
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }
}
