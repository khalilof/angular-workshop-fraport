/**
 * @author Khalil Khalil <khalil.khalil@ausy-technologies.de>
 */

export interface Task {
  columnId: number;
  title: string;
  assignee: string;
  epicId?: number;
  taskId?: number;
  _id?: string;
}
