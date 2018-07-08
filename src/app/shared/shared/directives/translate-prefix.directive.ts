import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTranslatePrefix]',
})
export class TranslatePrefixDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appTranslatePrefix') _prefix = '';
  constructor() {}

  get prefix() {
    return this._prefix;
  }
}
