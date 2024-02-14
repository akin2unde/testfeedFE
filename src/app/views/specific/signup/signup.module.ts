import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';


export const appRoutes: Routes = [
  { path: "", component: SignupComponent,title:"Signup" },
  { path: "signup", component: SignupComponent, title:"Signup"}
];
@NgModule({
  declarations: [SignupComponent],
  imports: [
       RouterModule.forChild(appRoutes),
      //  SharedModule,
  ],
  exports: [RouterModule]
})

export class SignupModule { }
