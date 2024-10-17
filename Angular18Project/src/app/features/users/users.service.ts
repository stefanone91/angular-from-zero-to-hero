import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserRequest, UpdateUserRequest, User } from './models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUser(id: User['id']) {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  createUser(body: CreateUserRequest) {
    return this.httpClient.post(`https://jsonplaceholder.typicode.com/users`, body, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

  updateUser(id: User['id'], body: UpdateUserRequest) {
    return this.httpClient.patch(`https://jsonplaceholder.typicode.com/users/${id}`, body, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
  }

  deleteUser(id: User['id']) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
