import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { ProjectTaskCudComponent } from './project-task-cud.component';



export const appRoutes: Routes = [
  { path: "", component: ProjectTaskCudComponent,title:"Project Task Detail"},
  { path: "project-task-detail", component: ProjectTaskCudComponent,title:"Project Task Detail"},

];
@NgModule({
  declarations: [ProjectTaskCudComponent],
  imports: [

    SharedModule,
    RouterModule.forChild(appRoutes),

  ]
})
export class ProjectTaskCUDModule { }
