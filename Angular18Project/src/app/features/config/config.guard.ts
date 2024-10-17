import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { ConfigService } from './config.service';

export const canActivateConfig: CanActivateFn = () => {
  return inject(ConfigService)
    .getObservable()
    .pipe(map(x => !!x));
};
