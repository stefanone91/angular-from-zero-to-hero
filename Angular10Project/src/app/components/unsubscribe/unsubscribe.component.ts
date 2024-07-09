import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss'],
})
export class UnsubscribeComponent implements OnInit {
  users: User[] = [];

  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    // Missing unsubscribe
    timer(0, 1000)
      .pipe(
        tap(() => console.log('Calling users API...')),
        switchMap(() => this.usersService.getUsers())
      )
      .subscribe((response) => {
        this.users = response;
      });
  }
}
