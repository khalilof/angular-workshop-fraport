import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from "./components/board/board.component";
import { TaskDetailsComponent } from "./components/task-details/task-details.component";

const routes: Routes = [
  {
    path: 'board',
    component: BoardComponent,
    data: { title: 'Pentasys SCRUM Board' }
  },
  { path: 'task/:id',      component: TaskDetailsComponent },
  { path: '',
    redirectTo: '/board',
    pathMatch: 'full'
  }/* ,
  { path: '**', component: PageNotFoundComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
