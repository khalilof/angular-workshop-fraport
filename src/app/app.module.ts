import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BoardComponent } from "./components/board/board.component";
import { TaskComponent } from "./components/task/task.component";
import { AddColumnComponent } from "./components/forms/add-column/addColumn.component";
import { TaskDetailsComponent } from "./components/task-details/task-details.component";
import { ColumnComponent } from "./components/column/column.component";
import { AddTaskComponent } from "./components/forms/add-task/addTask.component";
import { AssigneePipe } from "./pipes/assignee.pipe";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { BoardService } from "./services/board.service";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ColumnComponent,
    AddColumnComponent,
    TaskComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    AssigneePipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
