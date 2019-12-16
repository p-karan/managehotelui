import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from "./login.service";
import {LoginComponent} from "./login/login.component";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  constructor(private router: Router, private loginComponent: LoginComponent) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.loginComponent.loginStatus='logged') {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }
}

