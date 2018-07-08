import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputPrepend]',
})
export class InputPrependDirective {
  @HostBinding('class') clazz = 'input-group-prepend';
  constructor() {}
}
