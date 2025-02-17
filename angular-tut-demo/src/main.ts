import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { APP_SERVICE_CONFIG, AppServiceConfig } from './app/app.config.server';
const appServiceConfig: AppServiceConfig = {
  apiUrl: 'https://api.example.com',
  enableLogging: true
};

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    { provide: APP_SERVICE_CONFIG, useValue: appServiceConfig }  // ✅ Providing service config globally
  ]
}).catch(err => console.error(err));
