import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/core/modules/shared.module';
import { ProjectCudComponent } from '../project-cud/project-cud.component';
import { FormControlValidatorDirective } from 'src/app/core/directives/form-control-validator.directive';



export const appRoutes: Routes = [
  { path: "", component: ProjectComponent,title:"Project" },
  { path: "project", component: ProjectComponent, title:"Project"}
];
@NgModule({
  declarations: [ProjectComponent,ProjectCudComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class ProjectModule { }
