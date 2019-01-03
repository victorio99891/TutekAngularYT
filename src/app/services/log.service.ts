import {Injectable} from '@angular/core';

@Injectable()
export class LogService {

  logger(log: string) {
    let date: Date = new Date();
    console.log('['+date.toLocaleDateString() + ' ' +
      date.toLocaleTimeString() +
      '] --> ' + log);
  }

}
