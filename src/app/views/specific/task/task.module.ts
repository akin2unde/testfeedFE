import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task-view/task.component';
import { RouterModule, Routes } from '@angular/router';
import { ProjectTaskCudComponent } from './project-task-cud/project-task-cud.component';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { TaskMainComponent } from './task-main/task-main.component';



export const appRoutes: Routes = [
  {
    path: '',
    component: TaskMainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./task-view/project-task.module').then(m => m.ProjectTaskModule)
      },
      {
        path: 'project-task-detail/:id',
        loadChildren: () => import('./project-task-cud/project-task-cud.module').then(m => m.ProjectTaskCUDModule)
      },
    ],
    title:'Task'//important to load the default route
  },
];
@NgModule({
  declarations:[TaskMainComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class TaskModule { }
