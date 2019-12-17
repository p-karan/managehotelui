/*
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Hotel} from "../hotel";
import {Rooms} from "../rooms";
import {Router} from "@angular/router";
import {HotelService} from "../hotel.service";
import {RoomService} from "../room.service";

@Component({
  selector: 'app-addrooms2',
  templateUrl: './addrooms2.component.html',
  styleUrls: ['./addrooms2.component.css']
})
export class Addrooms2Component implements OnInit {

  addRoomForm: FormGroup;
  City = ['Mumbai', 'Delhi', 'Chennai', 'Kolkata'];
  hotelList: Hotel[];
  selectedCity: string;
  selectedHotelName: string;
  hotelReturned: Hotel;
  hotelId: number;
  btnText = 'Add Rooms';

  newroom: Rooms = {
    roomId: 0,
    hotelId: 0,
    ratePerNight: 0,
    roomNo: 0,
    roomType: '',
    roomDescription: ''
  };
  constructor( private route: Router, private hotelService: HotelService, private roomservice: RoomService) { }

 /!* ngOnInit() {
    this.addRoomForm = new FormGroup({
      hotelId: new FormControl(this.hotel.hotelId)
    }
  }*!/

}
*/
