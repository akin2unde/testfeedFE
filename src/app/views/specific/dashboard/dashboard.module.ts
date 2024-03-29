import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
  { path: "", component: DashboardComponent,title:"Dashboard" },
  { path: "home", component: DashboardComponent, title:"Dashboard"}
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),

  ]
})
export class DashboardModule { }
