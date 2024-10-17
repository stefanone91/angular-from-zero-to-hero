import { inject, Injectable } from '@angular/core';
import { ConfigService } from './features/config/config.service';
import { AuthService } from './features/auth';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {
  private readonly configService = inject(ConfigService);
  private readonly authService = inject(AuthService);

  async init() {
    await this.configService.init();
    await this.authService.init();
  }
}
