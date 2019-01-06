import {Pipe, PipeTransform} from '@angular/core';
import {TaskModel} from '../task-list-with-service/models/task.model';

@Pipe({
  name: 'sortList',
  pure: true // normally is true -> when in change to false it working ... but IS NOT GOOD PRACTICE
})
export class SortListPipe implements PipeTransform {

  transform(value: Array<TaskModel>, args?: any): any {
    return value.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
  }

}
