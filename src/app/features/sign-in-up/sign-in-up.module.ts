import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInUpRoutingModule } from './sign-in-up.routing';
import { SignInUpComponent } from './sign-in-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedFormsModule } from '#shared/shared-forms/shared-forms.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, SignInUpRoutingModule, TranslateModule.forChild(), FontAwesomeModule, SharedFormsModule],
  declarations: [SignInUpComponent, SignInComponent, SignUpComponent],
})
export class SignInUpModule {}
