
import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';



export const appRoutes: Routes = [
  { path: "", component: LoginComponent,title:"Login" },
  { path: "login", component: LoginComponent, title:"Login"}
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
       RouterModule.forChild(appRoutes),
      //  SharedModule,
  ],
  exports: [RouterModule]
})
export class LoginModule { }
