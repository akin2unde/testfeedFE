import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task.component';
import { RouterModule, Routes } from '@angular/router';



export const appRoutes: Routes = [
  { path: "", component: TaskComponent,title:"Task" },
  { path: "task", component: TaskComponent, title:"Task"}
];
@NgModule({
  declarations: [TaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),

  ]
})
export class TaskModule { }
