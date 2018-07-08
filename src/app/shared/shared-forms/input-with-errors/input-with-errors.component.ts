import { Component, Input, ViewChild, ElementRef, Self, Host, Optional, forwardRef } from '@angular/core';
import { NgControl, ControlValueAccessor } from '@angular/forms';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { TranslatePrefixDirective } from '#shared/shared/directives/translate-prefix.directive';
import { COMPONENT_WITH_PLACEHOLDER, ComponentWithPlaceholder } from '#shared/shared-forms/directives/translate-placeholder.directive';

@Component({
  selector: 'app-input-with-errors',
  templateUrl: './input-with-errors.component.html',
  styleUrls: ['./input-with-errors.component.scss'],
  providers: [{ provide: COMPONENT_WITH_PLACEHOLDER, useExisting: forwardRef(() => InputWithErrorsComponent) }],
})
export class InputWithErrorsComponent implements ControlValueAccessor, ComponentWithPlaceholder {
  @ViewChild('input') input: ElementRef;

  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() disabled = false;

  @Input() showInvalid = true;
  @Input() showValid = false;

  onChangeCb: Function;
  onTouchCb: Function;

  @Input() errorIcon = faTimes;

  constructor(
    @Self() public ngControl: NgControl,
    @Optional()
    @Host()
    private translatePrefix: TranslatePrefixDirective
  ) {
    ngControl.valueAccessor = this;
  }

  writeValue(value: string) {
    this.input.nativeElement.value = value;
  }

  registerOnChange(fn: Function) {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouchCb = fn;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  get classes() {
    return {
      'is-invalid': this.ngControl.control.invalid && this.showInvalid && (this.ngControl.touched || this.ngControl.dirty),
      'is-valid': this.ngControl.control.valid && this.showValid && (this.ngControl.touched || this.ngControl.dirty),
    };
  }

  get errors(): string[] {
    const errors = Object.keys(this.ngControl.errors);
    if (this.translatePrefix && this.translatePrefix.prefix) {
      return errors.map((e) => `${this.translatePrefix.prefix}.${this.ngControl.name}.errors.${e}`);
    }
    return errors;
  }
}
