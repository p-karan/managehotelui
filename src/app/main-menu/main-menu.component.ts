import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import {HotelService} from '../hotel.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  statusCheck = '';
  constructor(private service: HotelService, private router: Router, private data: DataService) {

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
