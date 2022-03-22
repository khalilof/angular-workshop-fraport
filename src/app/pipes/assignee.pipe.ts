/**
 * @author Khalil Khalil <khalil.khalil@ausy-technologies.de>
 */

import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../classes/task';
@Pipe({
  name: 'assignee'
})
export class AssigneePipe implements PipeTransform {

  transform(tasks: Task[], assinee: any): any {
    if (assinee === '') {
      return tasks;
    }
    return tasks.filter(task => task.assignee === assinee);
  }

}
