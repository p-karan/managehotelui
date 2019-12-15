import { Component, OnInit } from '@angular/core';
import {Hotel} from '../hotel';
import {HotelService} from '../hotel.service';
import {isBoolean} from 'util';
import {Router} from '@angular/router';
import{ jqxScrollBarComponent } from 'jqwidgets-ng/jqxscrollbar';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  // images = ["assets/img/Hotel/Taj.jpg", "assets/img/Hotel/Trident.jpg", "assets/img/Hotel/PalmBeach.jpg"];
  hotelList: Hotel[];

  constructor(private service: HotelService, private router: Router) { }

  ngOnInit() {
    this.service.findAll().subscribe(data => this.hotelList = data);
  }

}
