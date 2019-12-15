import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL = 'http://localhost:7575/user';
  constructor(private client: HttpClient) { }

  registerUser(newUser: User): Observable<User> {
    return this.client.post<User>(this.baseURL, newUser);
  }
}
