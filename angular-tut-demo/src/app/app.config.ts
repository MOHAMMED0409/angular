import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiUrl: string;
  featureFlag: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
