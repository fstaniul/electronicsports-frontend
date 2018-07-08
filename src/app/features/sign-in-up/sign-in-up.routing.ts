import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInUpComponent } from '#features/sign-in-up/sign-in-up.component';
import { SignInComponent } from '#features/sign-in-up/sign-in/sign-in.component';
import { SignUpComponent } from '#features/sign-in-up/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: '',
    pathMatch: 'prefix',
    component: SignInUpComponent,
    children: [{ path: 'sign-in', component: SignInComponent }, { path: 'sign-up', component: SignUpComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInUpRoutingModule {}
