import { APP_INITIALIZER, Provider } from '@angular/core';
import { ConfigService } from './config.service';

export function provideConfig(): Provider[] {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (configService: ConfigService) => () => configService.init(),
      deps: [ConfigService],
      multi: true
    }
  ];
}
