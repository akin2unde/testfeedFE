import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature.component';


export const appRoutes: Routes = [
  { path: "", component: FeatureComponent,title:"Request" },
  { path: "feature", component: FeatureComponent, title:"Feature"}
];
@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),

  ]
})
export class FeatureModule { }
