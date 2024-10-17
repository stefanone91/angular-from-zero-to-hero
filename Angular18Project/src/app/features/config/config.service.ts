import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly httpClient = inject(HttpClient);
  config$ = new BehaviorSubject<Record<string, string> | undefined>(undefined);

  async init() {
    const result = await firstValueFrom(this.httpClient.get<Record<string, string>>('/assets/config.json'));
    this.config$.next(result);
  }

  get() {
    return this.config$.value!;
  }

  getObservable() {
    return this.config$.asObservable();
  }
}
