export class Task {

  taskText: string;
  taskStart: Date;
  taskDone: Date;
  taskTime: number;

  constructor(taskText: string) {
    this.taskText = taskText;
    this.taskStart = new Date();
  }
}
