import { InjectionToken } from '@angular/core';
import {config} from '../app/app.config.server';

export interface AppServiceConfig {
  apiUrl: string;
  enableLogging: boolean;
}

export const APP_SERVICE_CONFIG = new InjectionToken<AppServiceConfig>('app.service.config');


