import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '#shared/shared/shared.module';

import { InputWithErrorsComponent } from './input-with-errors/input-with-errors.component';
import { InputAppendDirective } from './directives/input-append.directive';
import { InputPrependDirective } from './directives/input-prepend.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule.forChild(), FontAwesomeModule, SharedModule.forFeature()],
  declarations: [InputWithErrorsComponent, InputPrependDirective, InputAppendDirective],
  exports: [ReactiveFormsModule, InputWithErrorsComponent],
})
export class SharedFormsModule {}
