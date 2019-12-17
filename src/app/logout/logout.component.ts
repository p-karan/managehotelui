import { Component, OnInit } from '@angular/core';
import {SessionService} from "../session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: SessionService, private router: Router) { }

  ngOnInit() {
    this.service.loginStatus.next('notlogged');
    sessionStorage.removeItem('userlogged');
    this.router.navigate(['/home']);
  }

}
