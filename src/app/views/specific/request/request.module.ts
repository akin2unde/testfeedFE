import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  { path: "", component: RequestComponent,title:"Request" },
  { path: "request", component: RequestComponent, title:"Request"}
];
@NgModule({
  declarations: [RequestComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),

  ]
})
export class RequestModule { }
