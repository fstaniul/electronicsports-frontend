import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxsModule } from '@ngxs/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { ElectronicsportsApiModule } from '#shared/electronicsports-api/electronicsports-api.module';

import states from '#store/app.states';
import { SharedModule } from '#shared/shared/shared.module';

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxsModule.forRoot(states),
    ElectronicsportsApiModule.forRoot(),
    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
