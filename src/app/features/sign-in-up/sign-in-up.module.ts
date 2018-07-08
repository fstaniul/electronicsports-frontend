import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInUpRoutingModule } from './sign-in-up.routing';
import { SignInUpComponent } from './sign-in-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [CommonModule, SignInUpRoutingModule],
  declarations: [SignInUpComponent, SignInComponent, SignUpComponent],
})
export class SignInUpModule {}
