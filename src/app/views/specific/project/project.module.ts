import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';



export const appRoutes: Routes = [
  { path: "", component: ProjectComponent,title:"Project" },
  { path: "project", component: ProjectComponent, title:"Project"}
];
@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class ProjectModule { }
