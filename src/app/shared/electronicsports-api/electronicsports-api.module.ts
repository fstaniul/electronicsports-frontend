import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ElectronicsportsApiService } from './electronicsports-api.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class ElectronicsportsApiModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: ElectronicsportsApiModule,
      providers: [ElectronicsportsApiService],
    };
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: ElectronicsportsApiModule,
    };
  }
}
