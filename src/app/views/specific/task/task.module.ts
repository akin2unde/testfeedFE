import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task-view/task.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTaskCudComponent } from './project-task-cud/project-task-cud.component';
import { SharedModule } from 'src/app/core/modules/shared.module';



export const appRoutes: Routes = [
  { path: "", component: TaskComponent,title:"Task" },
  { path: "task", component: TaskComponent, title:"Task"}
];
@NgModule({
  declarations: [TaskComponent,ProjectTaskCudComponent],
  imports: [

    SharedModule,
    RouterModule.forChild(appRoutes),

  ]
})
export class TaskModule { }
