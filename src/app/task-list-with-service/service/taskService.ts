import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskModel} from '../models/task.model';

@Injectable()
export class TaskService {

  tasksList: Array<TaskModel> = [];
  private tasksDone: Array<TaskModel> = [];


  // All services are initialized before components when it provides from app.module
  // There we using a behaviour subject because this element give us a previous value (before service subscription)

  private tasksListObs = new BehaviorSubject<Array<TaskModel>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<TaskModel>>(this.tasksDone);

  constructor() {
    this.tasksList = [
      {name: 'Clean the shower', created: new Date()},
      {name: 'Take some rest', created: new Date()},
      {name: 'Call your mom', created: new Date()},
      {name: 'Learn some Angular', created: new Date()},
      {name: 'Wash your feet', created: new Date()}
    ];
    this.tasksListObs.next(this.tasksList);
  }

  add(task: string) {
    this.tasksList.push({
      name: task,
      created: new Date()
    });
    this.tasksListObs.next(this.tasksList);
  }

  remove(index: number) {
    this.tasksList.splice(index, 1);
    this.tasksListObs.next(this.tasksList);
  }

  done(index: number) {
    this.tasksList[index].end = new Date();
    this.tasksDone.push(this.tasksList[index]);
    this.remove(index);
    this.tasksDoneObs.next(this.tasksDone);
  }

  getListTasksObs(): Observable<Array<TaskModel>> {
    return this.tasksListObs.asObservable();
  }

  getDoneTasksObs(): Observable<Array<TaskModel>> {
    return this.tasksDoneObs.asObservable();
  }


}
