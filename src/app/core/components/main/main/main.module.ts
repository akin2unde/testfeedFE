import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { DashboardComponent } from 'src/app/views/specific/dashboard/dashboard.component';
import { AuthGuard } from 'src/app/core/services/authGuard';
import { SideBarModule } from '../../side-bar/side-bar.module';
import { TopBarModule } from '../../top-bar/top-bar.module';
import { FooterModule } from '../../footer/footer.module';
import { ToastModule } from 'primeng/toast';


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
      {
        path: 'project',
        canActivate: mapToCanActivate([AuthGuard]),
        loadChildren: () =>
          import('../../../../views/specific/project/project.module').then(
            (m) => m.ProjectModule
          ),
      },
      {
        path: 'task',
        canActivate: mapToCanActivate([AuthGuard]),
        loadChildren: () =>
          import('../../../../views/specific/task/task.module').then(
            (m) => m.TaskModule
          ),
      },
      {
        path: 'feature',
        canActivate: mapToCanActivate([AuthGuard]),
        loadChildren: () =>
          import('../../../../views/specific/feature/feature.module').then(
            (m) => m.FeatureModule
          ),
      },
      {
        path: 'request',
        canActivate: mapToCanActivate([AuthGuard]),
        loadChildren: () =>
          import('../../../../views/specific/request/request.module').then(
            (m) => m.RequestModule
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
    SideBarModule,
    FooterModule,
    TopBarModule,
    ToastModule
  ],
  exports: [RouterModule],

})
export class MainModule {

 }
