/**
 * @author Khalil Khalil <khalil.khalil@ausy-technologies.de>
 */

import { Component, OnInit } from '@angular/core';
import { BoardService } from '../../services/board.service';

import { Column } from '../../classes/column';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ausy-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  cols: Column[] = [];

  public showCreateTaskForm: boolean = false;
  public showCreateColumnForm: boolean = false;
  public assigneeFilterSubject$!: BehaviorSubject<string>;
  public widthOfColumn!: number;

  constructor(private boardService: BoardService) {}
  ngOnInit() {
    this.cols = [];
    this.boardService.getColumnListSubject().subscribe((cols) => {
      this.cols = cols;
      this.widthOfColumn = 100 / cols.length - 1;
    });

    this.boardService.fetchColumnList();
    this.boardService.fetchTasksList();

    this.assigneeFilterSubject$ = this.boardService.getAssigneeFilter();
  }

  createNewColumn() {
    this.showCreateColumnForm = true;
  }

  hideAddColumn(event: any) {
    this.showCreateColumnForm = false;
  }

  hideAddTask(event: any) {
    this.showCreateTaskForm = false;
  }

  createNewTask() {
    this.showCreateTaskForm = true;
  }

  handleKeyup($event: KeyboardEvent): void {
    this.assigneeFilterSubject$.next(($event.target as HTMLInputElement).value);
  }
}
