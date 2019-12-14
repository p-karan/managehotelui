import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  loginStatus = new BehaviorSubject<string>('notlogged');

  constructor() { }

  changeLoginStatus(message: string): void {
    this.loginStatus.next(message);
}}
