import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {HotelService} from '../hotel.service';
import {Router} from '@angular/router';
import {LoginService} from "../login.service";
import {Navlink} from "../navlink";
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  links: Navlink[];
  initalLink: Navlink[] = [
    {link: 'applyloan', text: 'Apply Loan'},
    {link: 'viewstatus', text: 'View Application Status'},
    {link: 'home', text: 'Home'}
  ];
  linkAdmin: Navlink [] = [
    {link: 'viewloanprogram', text: 'View/Edit Loan Program'},
    {link: 'editapplication', text: 'View Application'},
    {link: 'home', text: 'Home'}
  ];

  linkLad: Navlink[] = [
    {link: 'viewloanprogram', text: 'View Loan Program'},
    {link: 'editapplication', text: 'View/Edit Application'},
    {link: 'home', text: 'Home'}
  ];

  statusCheck = '';
  constructor(private service: HotelService, private router: Router, private data: DataService, private loginservice: LoginService) {

  }

  ngOnInit() {
  }
  getAdd() {
    console.log('Add option click from add');
    this.router.navigate(['/addhotel']);
    this.data.updateButton('Add Hotel');
    this.data.updateStatusMessage('');
    this.data.updateTitle('Add Hotel Details:');
    this.data.updateStatus('');
  }



}
