import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { ConfigService } from '../config';
import { User } from '../users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly httpClient = inject(HttpClient);
  private readonly configService = inject(ConfigService);

  user$ = new BehaviorSubject<User | undefined>(undefined);

  async init() {
    const { usersApiUrl } = this.configService.get();
    const result = await firstValueFrom(this.httpClient.get<User>(`${usersApiUrl}/1`));
    this.user$.next(result);
  }
}
