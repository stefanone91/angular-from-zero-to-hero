import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

export const canActivateAuth: CanActivateFn = () => {
  return inject(AuthService).user$.pipe(map(user => !!user));
};
