import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { DashboardComponent } from 'src/app/views/specific/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/services/authGuard';


export const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: mapToCanActivate([AuthGuard]),
      },
      {
        path: 'home',
        canActivate: mapToCanActivate([AuthGuard]),
        loadChildren: () =>
          import('../../../../views/specific/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
    ],
  },
];
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),

  ],
  exports: [RouterModule],

})
export class MainModule {

 }
