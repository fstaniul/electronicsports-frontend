import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInputAppend]',
})
export class InputAppendDirective {
  @HostBinding('class') clazz = 'input-group-append';
  constructor() {}
}
