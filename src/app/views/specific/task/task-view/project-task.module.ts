import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { TaskComponent } from './task.component';



export const appRoutes: Routes = [
  { path: "", component: TaskComponent,title:"Task"},
  { path: "task", component: TaskComponent,title:"Task"},

];
@NgModule({
  declarations: [TaskComponent],
  imports: [

    SharedModule,
    RouterModule.forChild(appRoutes),

  ]
})
export class ProjectTaskModule { }
