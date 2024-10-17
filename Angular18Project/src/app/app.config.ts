import { provideCloudinaryLoader } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { AppInitService } from './app-init.service';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideCloudinaryLoader('https://res.cloudinary.com/dou6exmo6'),
    // Uncomment this to use a custom image loader that acts as the cloudinaryLoader
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     console.log(config);
    //     const width = config.width ? `,w_${config.width}` : '';
    //     return `https://res.cloudinary.com/dou6exmo6/image/upload/f_auto,q_auto${width}${config.src}`;
    //   }
    // },
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AppInitService) => () => appInitService.init(),
      deps: [AppInitService],
      multi: true
    }
  ]
};
