import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<any>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }

  getUser(id: string) {
    return this.httpClient.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }

  createUser(body: any) {
    return this.httpClient.post(
      `https://jsonplaceholder.typicode.com/users`,
      body,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }

  updateUser(id: string, body: any) {
    return this.httpClient.patch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      body,
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
  }

  deleteUser(id: string) {
    return this.httpClient.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
