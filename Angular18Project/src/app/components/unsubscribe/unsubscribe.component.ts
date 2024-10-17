import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/features/users';

@Component({
  selector: 'app-unsubscribe',
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent {
  usersService = inject(UsersService);

  users$ = timer(0, 1000).pipe(
    tap(() => console.log('Calling users API...')),
    switchMap(() => this.usersService.getUsers())
  );
}
