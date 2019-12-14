import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./user";
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL = 'http://localhost:7575/user/userName/';

  constructor(private client: HttpClient) { }

  findByUserName(userName: string): Observable<User> {
    return this.client.get<User>(this.baseURL + userName);
  }
}
