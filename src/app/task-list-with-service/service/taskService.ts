import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class TaskService {

  private tasksList: Array<string> = [];
  private tasksDone: Array<string> = [];


  // All services are initialized before components when it provides from app.module
  // There we using a behaviour subject because this element give us a previous value (before service subscription)

  private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
  private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);

  constructor() {
    this.tasksList = ['Clean the shower', 'Take some rest', 'Call to you mom!'];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: string) {
    this.tasksList.push(task);
    this.tasksListObs.next(this.tasksList);
  }

  remove(index: number) {
    this.tasksList.splice(index, 1);
    this.tasksListObs.next(this.tasksList);
  }

  done(index: number) {
    this.tasksDone.push(this.tasksList[index]);
    this.remove(index);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getListTasksObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getDoneTasksObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }


}
