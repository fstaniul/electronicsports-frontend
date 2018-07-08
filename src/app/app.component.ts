import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private langChangeSub: Subscription;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    this.translateService.addLangs(['pl', 'en']);
    this.translateService.defaultLang = 'pl';

    let lang;
    if (localStorage) {
      lang = localStorage.getItem('lang') || 'pl';
    }

    this.translateService.use(lang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      if (localStorage) {
        localStorage.setItem('lang', event.lang);
      }
    });
  }

  ngOnDestroy(): void {}
}
