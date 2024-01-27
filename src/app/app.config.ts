import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DATE_PIPE_DEFAULT_OPTIONS, registerLocaleData } from '@angular/common';

import localeZhHant from '@angular/common/locales/zh-Hant';
import localZhHantExtra from '@angular/common/locales/extra/zh-Hant';
console.log(localeZhHant, localZhHantExtra);
registerLocaleData(localeZhHant, localZhHantExtra);

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'zh-Hant',
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: {
        dateFormat: 'full',
        timezone: '+0800',
      },
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'TWD',
    },
  ],
};
