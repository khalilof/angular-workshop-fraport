/**
 * @author Khalil Khalil <khalil.khalil@ausy-technologies.de>
 */

import { Component, Input, Output, OnInit, EventEmitter  } from '@angular/core';
import { BoardService } from '../../../services/board.service';
import { Column } from '../../../classes/column';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'penta-add-column',
  templateUrl: './addColumn.component.html',
  styleUrls: [ './addColumn.component.scss' ]
})
export class AddColumnComponent implements OnInit {
  columnForm!: FormGroup;
  newColumn!: Column;

  @Output()
  update: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private boardService: BoardService) {}

  ngOnInit() {
    this.newColumn = {
      title: '',
      order: 0,
      columnId: 0
    };
    this.initForm();
    console.log('init ');
  }

  initForm() {
    this.columnForm = this.fb.group({
      title: [this.newColumn.title, Validators.required ],
      order: [this.newColumn.order, Validators.required ],
    });
  }

  notifyParent() {
    console.log('notifyParent ');
    this.update.emit(true);
  }

  saveColumn() {
     this.boardService.createColumn(this.newColumn).subscribe(() => {
       this.boardService.fetchColumnList();
       this.notifyParent();
     });
  }

  hasRequiredError(form: any, field: any) {
    return form.get(field).hasError('required') && form.get(field).touched;
  }

}
