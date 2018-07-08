import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { JustRouterComponent } from './just-router/just-router.component';
import { TranslatePrefixDirective } from './directives/translate-prefix.directive';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([])],
  declarations: [JustRouterComponent, TranslatePrefixDirective],
  exports: [JustRouterComponent, TranslatePrefixDirective],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }

  public static forFeature(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
    };
  }
}
