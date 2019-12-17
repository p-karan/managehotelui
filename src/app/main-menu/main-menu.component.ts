import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {HotelService} from '../hotel.service';
import {Router} from '@angular/router';
import {LoginService} from "../login.service";
import {Navlink} from "../navlink";
import {SessionService} from "../session.service";
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  links: Navlink[];
  initalLink: Navlink[] = [
    {link: 'home', text: 'Home'},
    {link: 'hotel', text: 'Hotels'},
    {link: 'room', text: 'Rooms'}
  ];
  linkAdmin: Navlink [] = [
    {link: 'home', text: 'Home'},
    {link: 'hotel', text: 'Hotels',title:'test'},
    {link: 'room', text: 'Rooms'},
    /*{link: 'addhotel', text: 'Add Hotel',action:'click',handler:'getAdd()'},*/
    {link: 'addhotel', text: 'Add Hotel',title:'addhotel'},
    {link: 'updatehotel', text: 'Update Hotel'},
    {link: 'addroom', text: 'Add Room'},
    {link: 'updateroom', text: 'Update Room'},
    {link: 'generate', text: 'Generate'}
  ];

  linkUser: Navlink[] = [
    {link: 'home', text: 'Home'},
    {link: 'hotel', text: 'Hotels'},
    {link: 'room', text: 'Rooms'},
    {link: 'history', text: 'Booking History'}

  ];

  showLogin = 'inline';
  showLogout = 'none';
  loggedStatus = '';
  statusCheck = '';
  constructor(private service: HotelService, private router: Router, private data: DataService, private sessionservice: SessionService) {
    this.links = this.initalLink;
  }

  ngOnInit() {
    this.sessionservice.loginStatus.subscribe(resp => {
      console.log('response :' + resp);
      if (resp === 'logged') {
        this.loggedStatus = sessionStorage.getItem('userLogged');
        this.showLogin = 'none';
        this.showLogout = 'inline';
        console.log('loggedStatus:' + this.loggedStatus);
        if (this.loggedStatus === 'ADMIN') {
          console.log(this.loggedStatus);
          console.log('Loagged user is :' + this.loggedStatus);
          this.links = this.linkAdmin;
        }
        if (this.loggedStatus === 'USER') {
          console.log('Loagged user is :' + this.loggedStatus);
          this.links = this.linkUser;
        }
      } else {
        console.log('Logged out:' + this.loggedStatus );
        this.showLogin = 'inline';
        this.showLogout = 'none';
        this.links = this.initalLink;
      }
    });
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
